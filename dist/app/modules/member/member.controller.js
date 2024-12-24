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
exports.memberController = void 0;
const catchAsync_1 = __importDefault(require("../../utills/catchAsync"));
const sendResponce_1 = __importDefault(require("../../utills/sendResponce"));
const member_service_1 = require("./member.service");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.createMemberFromDB(req.body);
    (0, sendResponce_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Member created successfully',
        data: result,
    });
}));
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllMembersIntoDB();
    (0, sendResponce_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Members retrieved successfully',
        data: result,
    });
}));
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getSingleMembersIntoDB(req.params.memberId);
    (0, sendResponce_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Member retrieved successfully',
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.updateMemberIntoDB(req.params.memberId, req.body);
    (0, sendResponce_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Member updated successfully',
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.deleteMemberIntoDB(req.params.memberId);
    (0, sendResponce_1.default)(res, {
        success: true,
        statusCode: 200,
        message: 'Member deleted successfully',
        data: result,
    });
}));
exports.memberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
