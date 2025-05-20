const { router } = require('./models/routes/auth');

require('dotenv').config();
const express =requise('express');
const mongoose=requise('mongoose');
const cors=requise('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(ProcessingInstruction.env.MONGO_URI)
.then(()=>console.log("MongoDB connecté"))
.catch(err=>console.error(err));

app.listen(5000, ()=>console.log("serveur démarré sur le port 5000"));
module.exports = router;
