import express from 'express';
import db from './db/connector.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ObjectId } from 'mongodb';

const app = express();
const port = process.env.APP_PORT ?? 3000;

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


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })