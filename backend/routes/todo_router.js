const express = require("express");
const router = express();
const {
  getAll,
  createNew,
  getTaskWid,
} = require("../controllers/todo_controller");

router.get("/", getAll);
router.post("/", createNew);
router.get("/:id", getTaskWid);

module.exports = router;
