import express from 'express';
import { memberController } from './member.controller';

const router = express.Router();
router.post('/',memberController.createMember)
router.get('/',memberController.getAllMembers)
router.get('/:memberId',memberController.getSingleMember)
router.put('/:memberId',memberController.updateMember)
router.delete('/:memberId',memberController.deleteMember)






export const memberRoutes =router