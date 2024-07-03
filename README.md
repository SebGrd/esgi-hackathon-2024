# Hackathon 2024
## Description
Ajout de la retranscription audio aux différentes notifications permettant le suivis de personne ne possédant pas un téléphone portable.
## Features
- React frontend @SebGrd - Sébastien Gaudard
- Node.js API @SebGrd - Sébastien Gaudard
- Speech to text + Whisper @nfassorydiaby - Nfassory Diaby
- Text to speech @nono231000 - Nourdine Youssouf
- What's App @Kensei-s - Soheib Hadef

## Installation
Pour faire fonctionner l'appli, faire tourner toutes les apps en même temps
### Frontend
`cd client`
`npm install`
`npm run dev`
### Backend Node.js
`cd api`
`npm install`
`npm run dev`

#### .env
```
DB_USERNAME=
DB_PASSWORD=
APP_PORT=
DB_URI=
```

### Backend Flask
`cd server`
`docker compose up -d`
