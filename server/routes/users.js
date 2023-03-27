const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{

res.json([
    {
        username: 'Pillajo',
        age: 26
    },

    {
        username: 'Parra',
        age: 20
    },

])

});

module.exports = router;