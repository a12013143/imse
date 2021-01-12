FROM node:latest
WORKDIR /F/msc_uni/ISME/IMSE3/IMSE/
COPY package.json /F/msc_uni/ISME/IMSE3/IMSE/
RUN npm install sqlite3
RUN npm install
RUN apt update && apt install -y apt-transport-https ca-certificates sqlite3
COPY . /F/msc_uni/ISME/IMSE3/IMSE/
CMD ["npm", "start"]