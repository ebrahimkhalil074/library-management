import catchAsync from "../../utills/catchAsync"
import sendResponse from "../../utills/sendResponce";
import { borrowRecordService} from "./borrowRecord.service";

const createBorrowRecord =catchAsync(async (req,res) =>{
    const result = await borrowRecordService.createBorrowRecordFromDB(req.body);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'BorrowRecord created successfully',
        data: result,
    
    })
}

)
const returnBook =catchAsync(async (req,res) =>{
    const {borrowId}=req.body
    const result = await borrowRecordService.returnBook(borrowId);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book returned successfully',
        data: result,
    
    })
}

)
const overdueReturnBook =catchAsync(async (req,res) =>{
  
    const result = await borrowRecordService.overdeuReturnBook();
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book overdue successfully',
        data: result,
    
    })
}

)
export const borrowRecordController ={
    createBorrowRecord,
    returnBook,
    overdueReturnBook
    
 
}