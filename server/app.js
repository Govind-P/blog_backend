import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

import Blogs from './routes/blogs.js';
import Searchs from './routes/search.js';
app.use('/api/blog-stats', Blogs);
app.use('/api/blog-search', Searchs);

//Port normalization
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Create an HTTP server
const server = http.createServer(app);

// Normalize port function
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong! \nPlease Check the connection!' });
});


