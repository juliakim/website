const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('dist'));
app.get("/api/getUsername", (req, res) =>
  res.send('Username')
);

app.listen(port, () => console.log(`Listening on port ${port}!`));