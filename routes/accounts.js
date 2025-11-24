const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM accounts", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
