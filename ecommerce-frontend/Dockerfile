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

# Build the React app
RUN npm run build

# Use NGINX to serve the built React app
FROM nginx:alpine

# Copy the build files from the build stage to NGINX's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
