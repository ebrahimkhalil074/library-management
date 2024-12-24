"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const router = express_1.default.Router();
router.post('/', borrowRecord_controller_1.borrowRecordController.createBorrowRecord);
router.post('/return', borrowRecord_controller_1.borrowRecordController.returnBook);
router.get('/overdue', borrowRecord_controller_1.borrowRecordController.overdueReturnBook);
exports.borrowRecordRoutes = router;
