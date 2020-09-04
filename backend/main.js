const express = require("express");
const cors = require("cors");
//const multer = require("multer");

const app = express();

app.use(cors()); // unblocking cors policy
app.use(express.json()); // BODY :: RAW :: JSON
//app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
//const upload = multer(); // BODY :: FORM DATA

const dbadduser = require("./dbuser");



// created an API
// learnt how to read the input; coming from client.
// http://localhost:3000/adduser?username=hello
// app.get("/adduser", async (req, res) => {
//   try {
//     // lets read the query parameter
//     const input = req.query;

//     // calling db logic :: async :: non blocking
//     await dbadduser.addUser(input);
//     res.json({ message: "success" });
//   } catch (err) {
//     res.json({ message: "failure" });
//   }
// });

// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; // before doing this
    console.log(input);

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;
    console.log(input.email);
    let emailid  = input.email;
    await dbadduser.authenticateUser(input);
    res.json({ opr: true, "emailid" : emailid });
  } catch (err) {
    res.json({ opr: false });
  }
});
app.post("/add-ques", async (req, res) => {
  try {
    const input = req.body;
    console.log(input);
    await dbadduser.addquestion(input);
    res.json({ opr : true});
  } catch(err){
    res.json({opr: false});
  }
});

app.get("/get-ques", async(req,res) => {
  try{
    const input = req.query;
    let output = await dbadduser.getquestion();
    console.log(output);
    res.json({output});
  } catch(err){
    res.json({message : "unsuccessful"})
  }
});

app.post("/add-ans", async(req,res) => {
  try{
    const input = req.body;
    console.log("added answer");
    console.log(input);
    let output = await dbadduser.addans(input);
    console.log(output);
    res.json({output});
  } catch(err){
    res.json({message : "unsuccessful"})
  }
});

app.post("/get-ans", async(req,res) => {
  try{
    const input = req.body;
    console.log("getting answer");
    console.log(input);
    let output = await dbadduser.getans(input);
    console.log(output);
    res.json({output});
  } catch(err){
    res.json({message : "unsuccessful"})
  }
});

app.listen(3000);