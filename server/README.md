# Email Collection Server

This is a Node.js/Express server that handles email collection for the Zoe Roberts website.

## Features

- **Email Collection**: Collects emails from quiz completions and newsletter signups
- **SQLite Database**: Stores emails locally in a SQLite database
- **API Endpoints**: RESTful API for email management
- **Admin Features**: View statistics and export email lists

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Email Collection
- `POST /api/emails/quiz` - Submit email from quiz completion
- `POST /api/emails/newsletter` - Submit email from newsletter signup

### Admin Endpoints
- `GET /api/emails` - Get all collected emails
- `GET /api/emails/stats` - Get email collection statistics
- `GET /api/emails/export` - Export emails as CSV file
- `GET /api/health` - Health check

## Database

The server uses SQLite with the following schema:

```sql
CREATE TABLE emails (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  source TEXT NOT NULL,
  quiz_result TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

- `email`: The collected email address (unique)
- `source`: Either 'quiz' or 'newsletter'
- `quiz_result`: The mindset quiz result (growth/fixed/mixed) if from quiz
- `created_at`: Timestamp when email was collected

## Usage Examples

### Submit Quiz Email
```bash
curl -X POST http://localhost:3001/api/emails/quiz \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "quizResult": "growth"}'
```

### Submit Newsletter Email
```bash
curl -X POST http://localhost:3001/api/emails/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

### Get All Emails
```bash
curl http://localhost:3001/api/emails
```

### Export Emails as CSV
```bash
curl http://localhost:3001/api/emails/export -o email-list.csv
```

## Running with the Frontend

1. Start the email server:
```bash
cd server
npm start
```

2. In another terminal, start the frontend:
```bash
cd ..
npm run dev
```

The frontend will send emails to the server when users complete the quiz or sign up for the newsletter.

## Database Location

The SQLite database file is created at `server/emails.db`. You can view it with any SQLite browser or command-line tool.