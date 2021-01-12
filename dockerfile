FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install sqlite3
RUN npm install
RUN apt update && apt install -y apt-transport-https ca-certificates sqlite3
COPY . /app
CMD ["npm", "start"]