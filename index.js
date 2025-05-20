const { router } = require('./models/routes/auth');

require('dotenv').config();
const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(ProcessingInstruction.env.MONGO_URI)
.then(()=>console.log("MongoDB connecté"))
.catch(err=>console.error(err));

app.listen(5000, ()=>console.log("serveur démarré sur le port 5000"));
module.exports = router;
