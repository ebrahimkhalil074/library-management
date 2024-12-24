import prisma from "../../config"

const createMemberFromDB =async(payload:any)=>{
const result =await prisma.member.create({
    data:payload
})

return result;
}

const getAllMembersIntoDB =async()=>{
    const result =await prisma.member.findMany({
       
    })
    
    return result;
    }
const getSingleMembersIntoDB =async(id:string)=>{
    console.log(id)
    const result =await prisma.member.findUniqueOrThrow({
       where:{
        memberId:id,
       }
    })
    return result;
    }

    const updateMemberIntoDB =async(id:string,payload:any)=>{
        
        const result =await prisma.member.update({
           where:{
            memberId:id,
           },
           data:payload
        })
        return result;
        }
    const deleteMemberIntoDB =async(id:string)=>{

        const result =await prisma.member.delete({
           where:{
            memberId:id,
           },
          
        })
        return result;
        }
export const memberService ={
    createMemberFromDB,
    getAllMembersIntoDB,
    getSingleMembersIntoDB,
    updateMemberIntoDB,
    deleteMemberIntoDB,
   
}