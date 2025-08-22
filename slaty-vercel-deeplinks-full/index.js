const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/create-link", require("./routes/createLink"));
app.use("/api/enroll", require("./routes/enroll"));
app.use("/api/verify-payment", require("./routes/verifyPayment"));
app.use("/l", require("./routes/redirect"));

// Root
app.get("/", (req, res) => {
  res.send("Slaty Backend Running ✅");
});

/*const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));*/
module.exports = app;
