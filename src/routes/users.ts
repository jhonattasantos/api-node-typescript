import { Router } from "express";
import { getUserById, getUsers } from "../handlers/user";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

export default router;
