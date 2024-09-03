# Youtube Video Sharing Web Application

## Introduction

This project is a web application that allows users to register, log in, and share YouTube videos with others. The key features include user registration and login, sharing YouTube videos, viewing a list of shared videos, and real-time notifications when new videos are shared.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- PostgreSQL (v12.x or later)
- Docker (optional, for deployment)

## Installation & Configuration

1. Clone the repository:
   ```bash
   https://github.com/anhtt2211/youtube-video-sharing.git
   cd youtube-video-sharing
   ```
2. Install dependencies:
   ```bash
   npm install pnpm -g
   pnpm install
   ```
3. Configure your environment variables by make a copy from `.env.example`

   ```
   cp .env.example .env
   ```

## Database Setup

1. Ensure PostgreSQL is running on your machine.
2. Run the following command to set up the database:
   ```bash
   pnpm run migration:run
   ```
3. (Optional) Seed the database with initial data:
   ```bash
   pnpm run seed
   ```

## Running the Application

1. Start the development server:
   ```bash
   pnpm run start
   ```
2. Server start at `http://localhost:8000`.
3. To run the test suite:
   ```bash
   pnpm run test
   ```

## (BE/FS) Docker Deployment

(Optional for Backend developers)

1. Run the Docker container:
   ```bash
   docker-compose -f docker-compose up -d
   ```

## Usage

- **User Registration and Login:** Users can create an account and log in to access the application.
- **Sharing YouTube Videos:** Once logged in, users can share YouTube video links through a dedicated form.
- **Viewing Shared Videos:** Users can view a list of all videos shared by other users.
- **Real-Time Notifications:** Users receive notifications for new video shares displayed as pop-ups or banners, containing the video title and sharer's name.

## Troubleshooting

- **Issue:** PostgreSQL connection error.
  - **Solution:** Ensure PostgreSQL is running and the URI in the `.env` file is correct.
- **Issue:** Application does not start.

  - **Solution:** Check for any missing dependencies and ensure all environment variables are defined correctly in the `.env` file.

- **Issue:** Real-time notifications not working.
  - **Solution:** Ensure WebSocket connections are correctly established and the server is handling broadcasting correctly.
