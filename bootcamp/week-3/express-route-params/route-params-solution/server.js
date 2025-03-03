const express = require("express");
const path = require('path'); //a node native module
const {Restaurant, Menu, Item} = require('./models/index');

const app = express();
const port = 3000;

//Q: What does express.static help us do?
//Q: What do you think path.join helps us do?
app.use(express.static(path.join(__dirname, 'public')))

//will add routes
// 1)client makes a request -> request URL -> URL -> http request -> http response


//will add routes
app.get('/items', async (req, res) => {
    //goes into the database and looks for all Items
    const allItems = await Item.findAll()
    //server will respond with all the items found in the database
    res.json(allItems)
})



app.get('/randomItem', async (req, res) => {
    const randomNum = Math.floor(Math.random() * 3)
    const randomItem = await Item.findByPk(randomNum)

    res.json(randomItem)
})

//client makes a request to the webserver
app.get('/flipcoin', (req, res) => {
 //define a function that returns heads or tails
 const coinflip = !Math.floor(Math.random() * 2) ? 'Heads' : 'Tails' // 1 -> heads truthy : 0 ->tails bc falsy

  //server is returning a response
  res.send(coinflip)
})


app.get('/restaurants', async (req, res) => {
  const allRestaurants = await Restaurant.findAll()

  res.json(allRestaurants)
})


app.get('/restaurants/:id', async (req, res) => {

    //eager loading! We can nest include blocks, to fetch associations of associations
    const restaurant = await Restaurant.findByPk(req.params.id, {include : {
        model : Menu,
        include: Item
    }});
    res.json({ restaurant })
})

app.get('/menus/:id', async (req, res) => {
    //General querying with association using include
    const menu = await Menu.findByAll(req.params.id, {include: Item})
    res.json({ menu })
})

//Get Menu by name, using WHERE

app.get('/menus/name/:title', async (req, res) => {
    //General querying with association using include
    const menu = await Menu.findAll({
        where: {
            title : req.params.title 
        }
    })
    res.json({ menu })
})



//Q: What will our server be doing?
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
