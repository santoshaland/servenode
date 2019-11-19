#!/bin/bash

if [ $(docker container ls -a  -q  --filter name=myserver_c)!='' ];then 
    docker container stop myserver_c
    docker container rm myserver_c
fi

if [ $(docker image  ls  -q  --filter reference=myserver)!=''];then 
    docker image rm myserver 
fi 

docker build . -t myserver 

docker container run  -itd -p 4000:4000 --name myserver_c myserver