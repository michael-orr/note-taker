const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);

// GET Route for homepage
app.get("/", (req, res) => 
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/404.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);