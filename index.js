const express = require("express");
const bodyParser = require('body-parser');
const router = require("./router/router");
const app = express();

const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);


app.listen(port, () => {
    console.log(`Server Listening in ${port}`);
});