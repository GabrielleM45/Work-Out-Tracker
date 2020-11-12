var path = require("path");

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  app.get("/excercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/excercise.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });