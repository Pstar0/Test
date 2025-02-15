const express = require('express');
const app = express();
const allowedHost = "test-gm6y.onrender.com"; // Allowed hosting site

app.use((req, res, next) => {
    const host = req.headers.host;

    // Check if the current host matches the allowed one
    if (!host.includes(allowedHost)) {
        return res.type('text/javascript').send(`
            console.log("Access Denied: This is a cloned site from ES TEAMS MOBILE.");
            const btn = document.createElement("button");
            btn.innerText = "Click to Download";
            btn.style = "display: block; margin: 50px auto; padding: 10px 20px; font-size: 16px;";
            btn.onclick = () => window.location.href = "https://drive.google.com/file/d/11TYEwJmlkxecM-8TrSgltNp9ylDZUZcM/view?usp=drivesdk";
            document.body.appendChild(btn);
        `);
    } else {
        // If host is correct, pass control to index.js
        next();
    }
});

// Export app to be used in index.js
module.exports = app;