"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordService = void 0;
const config_1 = __importDefault(require("../../config"));
const createBorrowRecordFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.borrowRecord.create({
        data: payload
    });
    // Decrement the availableCopies count for the returned book
    const up = yield config_1.default.book.update({
        where: { bookId: payload === null || payload === void 0 ? void 0 : payload.bookId },
        data: { availableCopies: { decrement: 1 } },
    });
    console.log(up);
    return result;
});
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(borrowId);
    // Check if borrowId exists
    const borrowRecord = yield config_1.default.borrowRecord.findUnique({
        where: {
            borrowId,
            returnDate: null, // Only return records that have not been returned yet
        }
    });
    console.log(borrowRecord);
    // Update the borrow record to mark it as returned
    const updatedBorrow = yield config_1.default.borrowRecord.update({
        where: { borrowId },
        data: { returnDate: new Date() },
    });
    // Increment the availableCopies count for the returned book
    const up = yield config_1.default.book.update({
        where: { bookId: borrowRecord === null || borrowRecord === void 0 ? void 0 : borrowRecord.bookId },
        data: { availableCopies: { increment: 1 } },
    });
    console.log(up);
    return updatedBorrow;
});
const overdeuReturnBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() + 14);
    console.log(fourteenDaysAgo);
    const overdueBorrows = yield config_1.default.borrowRecord.findMany({
        where: {
            returnDate: null, // Only return records that have not been returned yet
            borrowDate: { lt: fourteenDaysAgo }, // Check if due date has passed 
        },
        include: {
            Book: {
                select: { title: true },
            },
            Member: {
                select: { name: true },
            },
        },
    });
    const data = overdueBorrows.map((borrow) => {
        const overdueDays = Math.ceil((new Date().getTime() - borrow.borrowDate.getTime()) / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: borrow.borrowId,
            bookTitle: borrow.Book.title,
            borrowerName: borrow.Member.name, // Assuming User model has a name field
            overdueDays,
        };
    });
    return data;
});
// GET /api/borrow/overdue
exports.borrowRecordService = {
    createBorrowRecordFromDB,
    returnBook,
    overdeuReturnBook
};
