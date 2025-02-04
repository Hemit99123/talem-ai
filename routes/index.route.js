const express = require("express");
const router = express.Router();
const { generateAndStoreEmbeddings, handleQuery } = require("../controllers/index.controller");

router.post("/embed", generateAndStoreEmbeddings);
router.post("/query", handleQuery);

module.exports = router;
