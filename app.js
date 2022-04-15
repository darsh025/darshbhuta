const express = require("express");
const bp = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app =express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));

app.post("/bfhl",(req,res)=>{
    var a={}
    var body =req.body;
    console.log(body);
    var is_success=true
    var user_id="darsh_bhuta_25032001"
    var email="darshbhutacs19@acropolis.in"
    var roll_number="0827CS191073"
    var numbers=[];
    var alphabets=[];
    numbers_length=0;
    alphabets_length=0;
    for(i=0;i<body.data.length;i++){
        console.log(body.data[i]);
        if(isNaN(parseInt(body.data[i]))){
            alphabets[alphabets_length++]=body.data[i];
        }
        else{
            numbers[numbers_length++]=parseInt(body.data[i]);
        }
    }
    if(is_success){
        a={
            "is_success":is_success,
            "user_id":user_id,
            "email":email,
            "roll_number":roll_number,
            "numbers":numbers,
            "alphabets":alphabets
        }
    }
    else{
        a={
            "is_success":is_success,
            "user_id":user_id,
            "email":email,
            "roll_number":roll_number
        }
    }
    res.json(a);


});

app.listen(PORT);