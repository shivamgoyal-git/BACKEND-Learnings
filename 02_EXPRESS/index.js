import express from 'express'
const app = express()
const port = 3001

app.get("/", (req, res) => {
    res.send("Hello from shivam")
})
app.get("/address", (req, res) => {
    res.send("I am from FTP")
})
app.get("/email", (req, res) => {
    res.send("shivamgoyal0308@gmail.com")
})

app.listen(port, () => {
    console.log(`Server is listining at port : ${port}...`);
})