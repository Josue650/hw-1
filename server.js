// Require modules
const express = require('express')

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */


/* END Middleware */

// Mount Routes
/*Start Routes */
app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage' , (req, res) => {
    const ans = parseInt(req.params.total) * parseInt(req.params.tipPercentage) / 100
    res.status(200).json({msg: `The tip is ${ans}`})
})

const arr = Math.random(["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now",
"Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"])
app.get('/magic', (req, res) => {
    res.send(`<h1>${req.params.arr}</h1>`)
})

/* END ROUTES */


// Tell the app to listen on a port
app.listen(3001, () => {
    console.log('Listening on Port 3001')
})
