"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const member_route_1 = require("../modules/member/member.route");
const borrowRecord_route_1 = require("../modules/borrowRecord/borrowRecord.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.bookRoutes,
    },
    {
        path: "/members",
        route: member_route_1.memberRoutes,
    },
    {
        path: "/borrow",
        route: borrowRecord_route_1.borrowRecordRoutes,
    },
];
moduleRoutes.forEach((moduleRoute) => {
    router.use(moduleRoute.path, moduleRoute.route);
});
exports.default = router;
