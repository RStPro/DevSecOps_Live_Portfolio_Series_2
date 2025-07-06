FROM node:18-alpine
WORKDIR /app
COPY ./apps/backend/package*.json ./
RUN npm install
COPY ./apps/backend .
EXPOSE 4000
CMD ["node", "index.js"]
