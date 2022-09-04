const fs = require('fs');
const path = require('path');

module.exports = {
    index : (req, res) => {
        return res.send('home.html')
    },

    about : (req, res) => {
        return res.send('about.html')
    }
}