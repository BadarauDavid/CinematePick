const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log(`Time: `, Date.now());
    next();
})


app.get('/',(req,res)=>{
    res.send('Succesful response.');
});

app.listen(3000, () => console.log('Exemple app is listening on port 3000.'));