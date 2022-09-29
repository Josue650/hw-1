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
    const ans = parseInt(req.params.total) + parseInt(req.params.tipPercentage)
    res.status(200).json({msg: `The answer i ${ans}`})
})

/* END ROUTES */


// Tell the app to listen on a port
app.listen(3001, () => {
    console.log('Listening on Port 3000')
})
