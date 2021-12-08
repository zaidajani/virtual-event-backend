const express = require("express");
const router = express.Router();
const { Db, validate } = require("../models/schema");

router.use(express.json());

router.get("/", async (req, res) => {
  const db = await Db.find();
  res.send(db);
});

router.post("/nominee", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let db = new Db({
    email: req.body.email,
    id: req.body.id,
  });
  await db.save();
  res.send(db);
});

module.exports = router;
