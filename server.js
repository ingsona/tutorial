const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//simple route
app.get("/", (req, res) => {
  res.sendFile('home.html', {
    root: './views'
  });
});
require("./routes/tutorial.routes")(app);

//set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});