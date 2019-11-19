var express=require('express');
var studrouter=express()
var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'spj',
    port:3306    
})

connection.connect();

stud=[];

studrouter.get("/",function(request,response){

    query=`select * from stud`;
    connection.query(query,function(error,result){
        if(error==null)
        {
            console.log(query);
            console.log(result);
            response.send(JSON.stringify(result));
        }
        else{
            console.log(error);
        }

    })
})

studrouter.post("/",function(request,response){

    let sno=request.body.no;
    let sname=request.body.name;
    let saddress=request.body.address;

    query=`insert into stud values(${sno},'${sname}','${saddress}')`;
    console.log(query);
    connection.query(query,function(error,result){
        if(error==null)
        {
            console.log(result);
        }
        else{
            console.log(error);
        }

    })
})




module.exports=studrouter;