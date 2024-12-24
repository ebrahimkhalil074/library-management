import express from 'express';
import { borrowRecordController } from './borrowRecord.controller';

const router = express.Router();
router.post('/',borrowRecordController.createBorrowRecord)
router.post('/return',borrowRecordController.returnBook)
router.get('/overdue',borrowRecordController.overdueReturnBook)







export const borrowRecordRoutes =router