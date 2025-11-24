const express = require("express");
const cors = require("cors");
const path = require("path");

const accountsRoutes = require("./routes/accounts");
const transactionsRoutes = require("./routes/transactions");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/accounts", accountsRoutes);
app.use("/api/transactions", transactionsRoutes);

app.use("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public/account.html"));
});

app.use("/public", express.static("public"));

app.listen(5002, () => {
    console.log("Banking Dashboard running at http://localhost:5002");
});
