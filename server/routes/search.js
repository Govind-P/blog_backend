import express from 'express';
import searchStat from '../controllers/search.js';
import searchstat from '../middleware/search.js';

const Searchs=express.Router();

Searchs.get('/',searchstat,searchStat);

export default Searchs;