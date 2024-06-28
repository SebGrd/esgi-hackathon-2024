from flask import Flask, request, jsonify
import whisper

app = Flask(__name__)
model = whisper.load_model("base")

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file.save("audio.mp3")
    result = model.transcribe("audio.mp3")
    return jsonify({'text': result["text"]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
