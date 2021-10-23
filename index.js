const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
const port = 5000;

app.get('/', (req, res) => {
    res.send('khan hi From My first ever node')
});

const users = [
    { id: 0, name: "salman", phone: '01202020' },
    { id: 1, name: "noor", phone: '01202020' },
    { id: 2, name: "Mamun", phone: '01202020' },
    { id: 3, name: "sojib", phone: '01202020' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else{
        res.send(users);
    }
    
});

// app.Method
app.post('/users', (req, res)=>{

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser); 
    console.log('hitting post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'apple', 'jam'])
})

app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('this very testy mango')
})

// optional line 
app.listen(port, () => {
    console.log('listening to port', port);
})