
import express from "express";
import { bookRoutes } from "../modules/book/book.route";
import { memberRoutes } from "../modules/member/member.route";
import { borrowRecordRoutes } from '../modules/borrowRecord/borrowRecord.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: "/books",
    route: bookRoutes,
  },
  {
    path: "/members",
    route: memberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRecordRoutes,
  },
 
];

moduleRoutes.forEach((moduleRoute) => {
  router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
