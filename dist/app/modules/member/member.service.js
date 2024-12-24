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
exports.memberService = void 0;
const config_1 = __importDefault(require("../../config"));
const createMemberFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.create({
        data: payload
    });
    return result;
});
const getAllMembersIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.findMany({});
    return result;
});
const getSingleMembersIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield config_1.default.member.findUniqueOrThrow({
        where: {
            memberId: id,
        }
    });
    return result;
});
const updateMemberIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.update({
        where: {
            memberId: id,
        },
        data: payload
    });
    return result;
});
const deleteMemberIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.default.member.delete({
        where: {
            memberId: id,
        },
    });
    return result;
});
exports.memberService = {
    createMemberFromDB,
    getAllMembersIntoDB,
    getSingleMembersIntoDB,
    updateMemberIntoDB,
    deleteMemberIntoDB,
};
