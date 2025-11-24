const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/:accountId", (req, res) => {
    const accountId = req.params.accountId;

    db.query(
        "SELECT * FROM transactions WHERE account_id = ? ORDER BY date DESC",
        [accountId],
        (err, results) => {
            if (err) throw err;
            res.json(results);
        }
    );
});

module.exports = router;
