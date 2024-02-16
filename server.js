const express = require("express");
const nodemailer = require("nodemailer");
const data = require("./db.json");
console.log("data",data);
// const cors=require("cors");
const app = express();

const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'efrain.heidenreich@ethereal.email',
            pass: 'y1FtZqr6gsAU6scJam'
        }
    });
const main =async (req,res) =>{
  const info = await transporter.sendMail({
    from: 'efrain.heidenreich@ethereal.email',
    to: "vickyahir8290@gmail.com", 
    subject: "hhhhh", 
    text: "hiigitt",
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);

}

// const corsOptions ={
//    origin:'*', 
//    credentials:true,            
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))
main().catch(console.error);
app.post("/",main)
app.get("/data",(req,res)=>{
  console.log("req.body =",req.query.userid);
res.send(data.employe);
})
app.listen(3001,()=>console.log("hello"))