import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verrifyToken, (req, res, next) => {
//   res.send("hello user,you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user,you are logged in and u can delete your acc");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello user,you are logged in and u can delete all accounts");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);

export default router;
