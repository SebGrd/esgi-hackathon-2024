#!/bin/bash

# Désactiver temporairement la vérification GPG
apt-get update --allow-releaseinfo-change
apt-get install -y --no-install-recommends apt-transport-https ca-certificates
echo 'Acquire::AllowInsecureRepositories "true";' > /etc/apt/apt.conf.d/99allow_unauthenticated
echo 'Acquire::AllowDowngradeToInsecureRepositories "true";' >> /etc/apt/apt.conf.d/99allow_unauthenticated
echo 'APT::Get::AllowUnauthenticated "true";' >> /etc/apt/apt.conf.d/99allow_unauthenticated

# Mettre à jour les dépôts et installer les dépendances, libérer l'espace après installation
apt-get update
apt-get install -y build-essential libsndfile1
apt-get clean
rm -rf /var/lib/apt/lists/*

# Exécuter le script Python
python3 app.py
