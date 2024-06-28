import express from 'express';
import db from './db/connector.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ObjectId } from 'mongodb';
import axios from 'axios';

const app = express();
const port = process.env.APP_PORT ?? 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/conversation', async (req, res) => {
  const conversations = await db.collection('Conversation').find({}).toArray();
  res.json(conversations);
});

app.post('/conversation', async (req, res) => {
  const conversation = req.body;
  const result = await db.collection('Conversation').insertOne(conversation);
  res.json(result);
});

app.get('/conversation/:id/calls', async (req, res) => {
  try {
    const conversation = await db.collection('Conversation').findOne({ _id: new ObjectId(req.params.id) });
    console.log(conversation);
    res.json(conversation.calls);
  } catch (e) {
    res.json({ error: e });
  }
});


app.patch('/conversation/:id', async (req, res) => {
  const result = await db.collection('Conversation').updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: req.body
    });
  res.json(result);
});


app.post('/emulate-outbound-call', async (req, res) => {
  const { title, date, message } = req.body;
  const conversations = await db.collection('Conversation').find({}).toArray();
  const conversation = conversations[Math.floor(Math.random() * conversations.length)];
  const call = {
    title,
    date,
    messages: [
      message
    ]
  }
  const result = await db.collection('Conversation').updateOne(
    { _id: conversation._id },
    { $push: { calls: call }, $set: { newCall: true } }
  );
  res.json(result);
});
// Nouvelle route pour envoyer un message vocal via l'API WhatsApp
app.post('/send-voice-message', async (req, res) => {
  const { recipientPhoneNumber, audioUrl } = req.body;

  const ACCESS_TOKEN = 'EAALa9J2mdwwBO8n4GswdAyyijzEAIqpiX2wk9UdifsiiO2BnkpMpP389iWcIleX8Coi0g0CaZCAFDqwOA0OoQSKI4K8yKjvIg0ZBEembT2HHqPbN7cbyvdTZAsj2di50LdJJXkPPdChJ95JUZAnAhFOuOfWU3ryI1cbH0B9LUaw4jz0kVAYuz76nvQKW3uhFg21dwlpDwt2PPNj2Ww7MCZAy8GefZCcBkG';
  const PHONE_NUMBER_ID = '299765513230571';

  const url = `https://graph.facebook.com/v13.0/${PHONE_NUMBER_ID}/messages`;

  const data = {
    messaging_product: 'whatsapp',
    to: recipientPhoneNumber,
    type: 'audio',
    audio: {
      link: audioUrl
    }
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ message: 'Message sent', data: response.data });
  } catch (error) {
    res.json({ error: error.response ? error.response.data : error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
