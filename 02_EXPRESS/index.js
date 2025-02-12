import express from 'express'
const app = express()
const port = 3001

app.use(express.json())

let teaData = []
let nextId = 1

// add tea
app.post('/teas', (req, res) => {
    const { name, price } = req.body
    const newTea = { id: nextId++, name, price }
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// get all the tea
app.get('/teas', (req, res) => {
    res.status(201).send(teaData)
})

//find tea with id
app.get('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        res.status(404).send("Tea Not Found:(")
    }
    res.status(200).send(tea)
})

//update tea
app.put('/teas/:id', (req, res) => {
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea) {
        res.status(404).send("Tea Not Found:(")
    }
    const { name, price } = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

//delete tea

app.delete('/teas/:id', (req, res) => {
    const index = teaData.find(t => t.id === parseInt(req.params.id))
    if(index === -1){
        res.status(404).send("Tea NOT FOUND:(")
    }
     const delTea = teaData.splice(index,1)
    return res.status(204).send(`deleted tea:\n${delTea}`)
})


app.listen(port, () => {
    console.log(`Server is listining at port : ${port}...`);
})