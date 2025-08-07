const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize SQLite database
const dbPath = path.join(__dirname, 'emails.db');
const db = new sqlite3.Database(dbPath);

// Create emails table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    source TEXT NOT NULL,
    quiz_result TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Submit email from quiz
app.post('/api/emails/quiz', (req, res) => {
  const { email, quizResult } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Valid email address is required' 
    });
  }

  const stmt = db.prepare(`
    INSERT OR REPLACE INTO emails (email, source, quiz_result) 
    VALUES (?, ?, ?)
  `);

  stmt.run([email, 'quiz', quizResult || null], function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to save email' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Email saved successfully',
      id: this.lastID
    });
  });

  stmt.finalize();
});

// Submit email from newsletter
app.post('/api/emails/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Valid email address is required' 
    });
  }

  const stmt = db.prepare(`
    INSERT OR REPLACE INTO emails (email, source) 
    VALUES (?, ?)
  `);

  stmt.run([email, 'newsletter'], function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to save email' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Email saved successfully',
      id: this.lastID
    });
  });

  stmt.finalize();
});

// Get all emails (admin endpoint)
app.get('/api/emails', (req, res) => {
  db.all(`
    SELECT id, email, source, quiz_result, created_at 
    FROM emails 
    ORDER BY created_at DESC
  `, (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to retrieve emails' 
      });
    }

    res.json({ 
      success: true, 
      emails: rows,
      count: rows.length
    });
  });
});

// Get email statistics
app.get('/api/emails/stats', (req, res) => {
  db.all(`
    SELECT 
      source,
      COUNT(*) as count,
      COUNT(CASE WHEN quiz_result IS NOT NULL THEN 1 END) as with_quiz_results
    FROM emails 
    GROUP BY source
  `, (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to retrieve statistics' 
      });
    }

    const stats = {
      total: 0,
      by_source: {}
    };

    rows.forEach(row => {
      stats.total += row.count;
      stats.by_source[row.source] = {
        count: row.count,
        with_quiz_results: row.with_quiz_results
      };
    });

    res.json({ 
      success: true, 
      stats
    });
  });
});

// Export emails as CSV (admin endpoint)
app.get('/api/emails/export', (req, res) => {
  db.all(`
    SELECT email, source, quiz_result, created_at 
    FROM emails 
    ORDER BY created_at DESC
  `, (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to export emails' 
      });
    }

    // Create CSV content
    const csvHeader = 'Email,Source,Quiz Result,Created At\n';
    const csvRows = rows.map(row => 
      `"${row.email}","${row.source}","${row.quiz_result || ''}","${row.created_at}"`
    ).join('\n');
    
    const csvContent = csvHeader + csvRows;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="email-list.csv"');
    res.send(csvContent);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Database location: ${dbPath}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});