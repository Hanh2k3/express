const express = require("express")
const router = express.Router()

// Load model 
const Post = require("../models/Post")

// Thu nghiem 
router.get('/', (req, res) => { // là một router
    res.send('Day la router post')
})

module.exports = router


