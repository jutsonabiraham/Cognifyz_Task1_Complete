const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        submitted: false,
        data: {}
    });
});

app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    res.render("index", {
        submitted: true,
        data: {
            name: name || "",
            email: email || "",
            message: message || ""
        }
    });
});

app.listen(PORT, () => {
    console.log(`Task 1 server running at http://localhost:${PORT}`);
});
