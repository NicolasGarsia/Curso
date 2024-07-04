function FiltroPar(arr) {
    nova_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            nova_arr.push(arr[i])
        }
    }
    return nova_arr

}

arr = [1,2,3,4,5,6]
result = FiltroPar(arr)

/* ------------------------------------------------------------------------------------ */

const express = require('express')

const { Client } = require('pg')

require("dotenv").config()



const client = new Client({

    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database

})

const app = express()

const connectDB = async () => {

    client
    .connect()
    .then(() => {
        console.log('a conexao funfo')
    }) .catch((err) => {
        console.error('erro nessa merda')
    });

};
connectDB()

app.get('/', function (req, res) {
    res.send('Nossa Api Funciona')
})

app.listen(8000)