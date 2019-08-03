const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const request = require("request")
const cp = require("child_process")
let { PythonShell } = require("python-shell")

let app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors())

app.get("/getcustomerids", (req, res) => {

    PythonShell.run('./queries/getCustomerIds.py', null, (err, results) => {
        if (err) console.log(err);
        res.send(results[0])

    });

})

app.get("/getSubscriptionDetail", (req, res) => {

    PythonShell.run('./queries/getSubscriptions.py', null, (err, results) => {
        if (err) console.log(err);
        res.send(results[0])

    });

})

makePostRequestAsPromise = (url, data) => {
    return new Promise((res, rej) => {
        request.post({
            url: url,
            data: data,
        }, (err, res, body) => {
            if (err)
                rej(err)
            res({ res: res, body: body })
        })
    })
}


app.listen('3000', () => {
    console.log("Application statrted on port 3000");
})