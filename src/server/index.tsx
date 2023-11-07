const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../dist/public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
