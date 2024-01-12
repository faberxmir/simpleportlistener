require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const APPTITLE = process.env.APPTITLE || 'Portlistener'
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index.ejs',{PORT, APPTITLE});
})

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});