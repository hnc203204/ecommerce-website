# Use the official Node.js image as a base
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

ENV REACT_APP_API_ENDPOINT="http://localhost:8000"

# Build the React app
RUN npm run build

# Install Serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to serve the built React app with Serve
CMD ["serve", "-s", "build", "-l", "3000"]