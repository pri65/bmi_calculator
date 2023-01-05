const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({encoded: true}));

app.get("/bmicalculator", function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res) {
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var bmi = weight / (height * height);

    res.send("Your BMI is" + bmi);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})