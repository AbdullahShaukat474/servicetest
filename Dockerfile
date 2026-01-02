#FROM node:18-alpine
FROM public.ecr.aws/docker/library/node:18-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

