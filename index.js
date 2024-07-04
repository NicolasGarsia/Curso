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

const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Nossa Api Funciona')
})

app.listen(8000)