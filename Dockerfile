FROM node:20-alpine
# Linux léger avec Node 20
WORKDIR /app
# dossier de travail
COPY package*.json ./
# copie les dépendances
RUN npm install
# les installe
COPY . .
EXPOSE 3000
# port de l'appli
CMD ["node", "app.js"]