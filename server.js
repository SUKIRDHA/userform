const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Backend server is running!");
});
app.post("/validate", (req, res) => {
    console.log(req.body);
    const { name, email, phno, age } = req.body;

    if (!name || name.length < 3) {
        return res.status(400).json({ message: "Name must be at least 3 characters long." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email address." });
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phno || !phoneRegex.test(phno)) {
        return res.status(400).json({ message: "Invalid phone number. It must start with 6, 7, 8, or 9 and be 10 digits long." });
    }

    if (!age || isNaN(age) || age <= 0 || age > 120) {
        return res.status(400).json({ message: "Age must be a number between 1 and 120." });
    }

    res.status(200).json({ message: "Validation successful!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});