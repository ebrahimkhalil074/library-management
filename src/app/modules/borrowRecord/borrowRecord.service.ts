import prisma from "../../config"

const createBorrowRecordFromDB =async(payload:any)=>{
const result =await prisma.borrowRecord.create({
    data:payload
})
  // Decrement the availableCopies count for the returned book
  const up =await prisma.book.update({
    where: { bookId: payload?.bookId },
    data: { availableCopies: { decrement: 1 } },
  });                        
  console.log(up)
return result;
}

const returnBook = async(borrowId:string)=>{
    console.log(borrowId)
     // Check if borrowId exists
     const borrowRecord = await prisma.borrowRecord.findUnique({
       where:{
         borrowId,
         returnDate: null, // Only return records that have not been returned yet
       }
      });
  console.log( borrowRecord)
      // Update the borrow record to mark it as returned
      const updatedBorrow = await prisma.borrowRecord.update({
        where:  { borrowId },
        data: {  returnDate: new Date() },
      });
  
      // Increment the availableCopies count for the returned book
      const up =await prisma.book.update({
        where: { bookId: borrowRecord?.bookId },
        data: { availableCopies: { increment: 1 } },
      });
      console.log(up)

      return updatedBorrow;
  
}
const overdeuReturnBook = async()=>{
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() +14); 
  console.log(fourteenDaysAgo)

  const overdueBorrows=await prisma.borrowRecord.findMany({
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
    const overdueDays = Math.ceil(
      (new Date().getTime() - borrow.borrowDate.getTime()) / (1000 * 60 * 60 * 24)
    ) - 14;

    return {
      borrowId: borrow.borrowId,
      bookTitle: borrow.Book.title,
      borrowerName: borrow.Member.name, // Assuming User model has a name field
      overdueDays,
    };
  });

 return data;
};


// GET /api/borrow/overdue


export const borrowRecordService ={
    createBorrowRecordFromDB,
    returnBook,
    overdeuReturnBook
   
}