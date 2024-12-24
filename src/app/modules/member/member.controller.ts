import catchAsync from "../../utills/catchAsync"
import sendResponse from "../../utills/sendResponce";
import { memberService } from "./member.service";

const createMember =catchAsync(async (req,res) =>{
    const result = await memberService.createMemberFromDB(req.body);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Member created successfully',
        data: result,
    
    })
}

)
const getAllMembers =catchAsync(async (req,res) =>{
    const result = await memberService.getAllMembersIntoDB();
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Members retrieved successfully',
        data: result,
    
    })
}

)
const getSingleMember =catchAsync(async (req,res) =>{
    const result = await memberService.getSingleMembersIntoDB(req.params.memberId);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Member retrieved successfully',
        data: result,
    
    })
}

)

const updateMember =catchAsync(async (req,res) =>{

    const result = await memberService.updateMemberIntoDB(req.params.memberId,req.body);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Member updated successfully',
        data: result,
    
    })
}

)
const deleteMember =catchAsync(async (req,res) =>{

    const result = await memberService.deleteMemberIntoDB(req.params.memberId);
    sendResponse(res,{
        success: true,
        statusCode:200,
        message: 'Member deleted successfully',
        data: result,
    
    })
}

)
export const memberController ={
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
 
}