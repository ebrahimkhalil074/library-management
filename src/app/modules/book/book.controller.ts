import catchAsync from "../../utills/catchAsync"
import sendResponse from "../../utills/sendResponce";
import { bookService } from "./book.service"

const createBook =catchAsync(async (req,res) =>{
    const result = await bookService.createBookFromDB(req.body);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book created successfully',
        data: result,
    
    })
}

)
const getAllBooks =catchAsync(async (req,res) =>{
    const result = await bookService.getAllBooksIntoDB();
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Books retrieved successfully',
        data: result,
    
    })
}

)
const getSingleBook =catchAsync(async (req,res) =>{
    const result = await bookService.getSingleBooksIntoDB(req.params.bookId);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book retrieved successfully',
        data: result,
    
    })
}

)

const updateBook =catchAsync(async (req,res) =>{

    const result = await bookService.updateBookIntoDB(req.params.bookId,req.body);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book updated successfully',
        data: result,
    
    })
}

)
const deleteBook =catchAsync(async (req,res) =>{

    const result = await bookService.deleteBookIntoDB(req.params.bookId);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Book deleted successfully',
        data: result,
    
    })
}

)
export const bookController ={
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
 
}