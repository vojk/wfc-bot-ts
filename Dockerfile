FROM node:20-alpine
LABEL authors="Zalubo"

# Install dependencies
RUN apk add --no-cache npm

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

COPY .env .env

# Start the application
CMD ["npm", "dev"]
