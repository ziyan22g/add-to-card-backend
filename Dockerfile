# Use Node.js v24 (Alpine version for smaller image size)
FROM node:24-alpine

# Set working directory inside container
WORKDIR /app

# Copy all project files into container
COPY . .

# Install dependencies from package.json
RUN npm install

# Expose port 7009 (so container can communicate on it)
EXPOSE 7009

# Start the backend in development mode using nodemon
CMD ["npm", "run", "dev"]
