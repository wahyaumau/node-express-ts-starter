FROM node:12-alpine
WORKDIR /usr/src/app 
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run tsc
EXPOSE 3000  
CMD [ "node","build/app.js" ]