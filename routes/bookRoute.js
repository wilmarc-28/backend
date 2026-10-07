import * as bookcontroller from '../controllers/bookController.js';
import express from 'express';

const bookRoute = express.Router();

bookRoute.get('/', bookcontroller.fetchAllBooks);

export default bookRoute; 
