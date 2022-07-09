const express = require("express");
const app = express()



//serve static
app.use(express.static('dist'))

app.get('/', (req, res) => {
  
    //serve dist/index.html
    res.sendFile(__dirname + '/dist/index.html')

});

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)