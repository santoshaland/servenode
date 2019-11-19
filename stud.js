var express=require('express');
var studrouter=express()
var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'192.168.43.137',
    user:'root',
    password:'root',
    database:'spj',
    port:9999    
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