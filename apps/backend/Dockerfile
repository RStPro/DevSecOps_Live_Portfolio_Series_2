FROM node:18-alpine

WORKDIR /app

# Copy only package files
COPY package*.json ./
RUN npm install

# Copy backend source files
COPY . .

EXPOSE 4000

CMD ["node", "index.js"]
