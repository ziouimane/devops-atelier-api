const express = require('express');
// charge Express (serveur web)
const app = express();
// crée l'application
app.get('/', (req,res) => res.json({ message:'Hello DevOps' }));
app.get('/health', (req,res) => res.json({ status:'ok' }));
app.get('/users', (req,res) =>
res.json([{id:1,name:'Salma'},{id:2,name:'Hafsa'}]));
module.exports = app;
// pour les tests
if (require.main === module) app.listen(3000,
() => console.log('API sur http://localhost:3000'))
