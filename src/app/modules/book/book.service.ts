import prisma from "../../config"

const createBookFromDB =async(payload:any)=>{
const result =await prisma.book.create({
    data:payload
})

return result;
}

const getAllBooksIntoDB =async()=>{
    const result =await prisma.book.findMany({
       
    })
    
    return result;
    }
const getSingleBooksIntoDB =async(id:string)=>{
    const result =await prisma.book.findUniqueOrThrow({
       where:{
        bookId:id,
       }
    })
    return result;
    }

    const updateBookIntoDB =async(id:string,payload:any)=>{
        
        const result =await prisma.book.update({
           where:{
            bookId:id,
           },
           data:payload
        })
        return result;
        }
    const deleteBookIntoDB =async(id:string)=>{

        const result =await prisma.book.delete({
           where:{
            bookId:id,
           },
          
        })
        return result;
        }
export const bookService ={
    createBookFromDB,
    getAllBooksIntoDB,
    getSingleBooksIntoDB,
    updateBookIntoDB,
    deleteBookIntoDB,
   
}