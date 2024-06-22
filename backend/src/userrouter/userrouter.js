const express = require("express");
const usercontroller = require("../usercontroller/usercontroller");

const router = express.Router();

router.post("/", usercontroller.createuser);
router.get("/", usercontroller.getAllUsers);
router.get("/:id", usercontroller.getuserid);
router.patch("/:id", usercontroller.updateuser);
router.delete("/:id",usercontroller.deleteuser);

module.exports = router;
