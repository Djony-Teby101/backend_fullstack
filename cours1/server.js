const express=require('express')
const dotenv= require('dotenv').config()
const app= express()
const path=require("path")

const PORT= process.env.PORT || 3500

// gestion des fichiers static.
app.use('/', express.static(path.join(__dirname, '/public')));


// Routes de l'application.
app.use('/', require('./routes/root'));





app.listen(PORT, ()=>console.log(`Serveur lancé sur le port: ${PORT}`))