var express=require('express');
var app=express();
var studroute=require('./stud');

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/student",studroute);

app.listen(4000,function(){
    console.log("server started on 4000 ");
})