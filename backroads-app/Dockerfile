FROM node:20

WORKDIR /backroads-app

COPY package*.json /backroads-app/

RUN npm install --force

COPY . /backroads-app/

EXPOSE 3000

CMD [ "npm start" ]