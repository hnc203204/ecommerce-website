# Use the official Node.js image as a base image
FROM node:22.1.0

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=8000
ENV TOKEN_SECRET=asdjoiasdjoas
ENV ADMIN_EMAIL=admin@gmail.com
ENV ADMIN_PASSWORD=admin
ENV STRIP_SECRET_KEY=sk_test_51J3
ENV MONGO_URI=mongodb://mongo:27017/ecommerce 
ENV AI_API_ENDPOINT=https://apriori-engine-6d764e48ad2a.herokuapp.com/api/submit_basket

COPY . .

EXPOSE 8000

CMD ["npm", "start"]