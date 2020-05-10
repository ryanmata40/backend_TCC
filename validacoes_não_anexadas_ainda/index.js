const express = require("express");
const cpf_validate = require("validar-cpf");
const cep = require('cep-promise');
const app = express();


function resolveApromise(c) {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve(c);
    }, 3000);
    });    
}

async function asyncfunction(c) {
    var p = await resolveApromise(cep(c));
    return p;
}

app.post("/frames/signup", function(req, res) {
    var cpf = req.body.cpf;
    cpf = cpf.split(" ").join("");
    
    if(cpf_validate(cpf)) {
        res.send(true);
    }
    else {
        res.send(false);
    }
});

app.post("/frames/signup", function(req, res) {
    var c = req.body.cep;
    res.send(asyncfunction(c));

    process.on('unhandledRejection', () => {
        res.send("Error");
    });
    
});


app.listen(8080);