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
app.get('/greeting/: Hello ', (req, res) => {
    res.send(`<h1>${req.params.Hello}</h1>`)
})

/* END ROUTES */


// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
