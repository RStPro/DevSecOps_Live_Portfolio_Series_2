FROM node:18-alpine
WORKDIR /app
COPY ./apps/frontend/package*.json ./
RUN npm install
COPY ./apps/frontend .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]