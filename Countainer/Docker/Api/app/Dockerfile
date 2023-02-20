# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /home/adamsgeeky/Documents/2023/Devops2023/Countainer/Docker/Api/app
COPY . .
RUN npm install --omit=dev
CMD ["node", "src/index.js"]
EXPOSE 3000