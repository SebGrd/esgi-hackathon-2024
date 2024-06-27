from gtts import gTTS
import tempfile
from flask import Flask, request, jsonify, send_file

app = Flask(__name__)

@app.route('/tts', methods=['POST'])
def synthesize_audio():
    data = request.json
    if 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']
    with tempfile.NamedTemporaryFile(delete=False) as fp:
        filename = fp.name + ".mp3"
        tts = gTTS(text=text, lang='fr')
        tts.save(filename)

    return send_file(filename, as_attachment=True)

@app.route('/') 
def home():
    return "Bienvenue sur le Text-to-Speech de CalMedica !"
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
   