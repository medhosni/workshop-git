const http = require('http')
const express = require('express')

const server=http.createServer(express())

server.listen(9999,()=>{
    console.log("cnx ......... 9999");
})