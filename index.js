const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.send("IRIS Safety Server is Running");
});

app.post("/emergency", (req, res) => {
  const { name, location } = req.body;

  console.log("EMERGENCY ALERT");
  console.log("User:", name);
  console.log("Location:", location);

  res.send("Emergency alert sent!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
