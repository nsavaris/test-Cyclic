const { log } = require("console");
const express = require("express");
// const request = require("request");

const PORT = process.env.PORT | 3000;
const app = express();
const bodyParser = require("body-parser");
const https = require("https");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",(req, res) => {

    res.json({message:"Hello, from backend!"})
    //res.sendFile(__dirname + "/signup.html");

});


// app.post("/", function (req, res) {

//     const firstName = req.body.fName;
//     const lastName = req.body.lName;
//     const email = req.body.email;

//     const data = {
//         members: [
//             {
//                 email_address: email,
//                 status: "subscribed",
//                 merge_fields: {
//                     FNAME: firstName,
//                     LNAME: lastName
//                 }
//             }
//         ]
//     };
//     const jsonData = JSON.stringify(data);

//     const url = "https://us9.api.mailchimp.com/3.0/lists/fdd7bc2315";
//     const options = {
//         method: "POST",
//         auth: "angela1: bfc60a3e3e2bdf8e2db20f43f9755994-us9"

//     }
//     const request = https.request(url, options, function(response){

//         if (response.statusCode === 200){
//             res.sendFile(__dirname + "/success.html");
//         } else {
//             res.sendFile(__dirname + "/failure.html");
//         }
//         response.on("data", function(data){
//             console.log(JSON.parse(data));
//         })
//     })
//     request.write(jsonData);
//     request.end();
// });

// app.post("/failure", function(req, res){
//     res.redirect("/");
// });

app.listen(PORT,()=>{
    console.log('Server is listening on ${PORT}...')
    // console.log("Server started on port 3000");
});

//API Key : bfc60a3e3e2bdf8e2db20f43f9755994-us9

//List id : fdd7bc2315