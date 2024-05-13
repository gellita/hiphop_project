require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// const start = async () => {
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()
//         app.listen(PORT, () => console.log('server started on port' + PORT))
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
//
//
// start()

