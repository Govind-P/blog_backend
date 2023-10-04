import express from 'express';
import blogStat from '../controllers/blogs.js';
import cachedBlogstat from '../middleware/blogstat.js';

const Blogs=express.Router();

Blogs.get('/',cachedBlogstat,blogStat);

export default Blogs;