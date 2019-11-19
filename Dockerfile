FROM node

WORKDIR /code 

COPY . . 

EXPOSE 4000

CMD node index.js