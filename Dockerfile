# Start by choosing a base image. Here, we're using a node image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json, pnpm-lock.yaml (or package-lock.json, yarn.lock) to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies - take advantage of Docker caching by doing this before copying your app source
RUN pnpm install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Build the application. This step may vary depending on your project structure. For example, if you're using TypeScript:
RUN pnpm run build

# Expose the port that your app runs on
EXPOSE 8000

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "dist/main"]
