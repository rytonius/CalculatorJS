import {add, subtract, divide, multiply} from "./calculator.js";
import * as fs from 'fs';
import express from 'express';
const app = express();
const port = 3000;



console.log(add(1, 5));

function SReader() {

   const file =  fs.readFile('read.txt', 'utf8', (err, f) => {
        if (err) {
            console.log("error");
            return console.error(err);
        }
        console.log(f);
    });
         
}

async function AReader() {
    const file = await fs.promises.readFile('read.txt', 'utf8').then(
        function (result) {
            console.log(result);
        }
       )
}

SReader();
AReader();

// app.get('/', (request, respond) => {
//     fs.readFile('./index.html', 'utf8', (err, html) => {
//         if (err) {
//             respond.status(500).send('I have no idea what I\'m doing');
//         }
//         respond.send(html);
//     })
// });
app.get('/', async (request, respond) => {
    response.send( await fs.promises.readFile('./index.html', 'utf8'))
});
// process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

