const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const d = new Date()

app.use(bodyParser.json())

let persons =  [
        { 
          "id": "1",
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": "2",
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": "3",
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": "4",
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
]

app.get('/' ,(req,res) => {
    res.send('Hello World')
})

app.get('/data',(req,res) => {
    res.json(persons)
})

app.get('/data/:id',(req,res) => {
    const id = req.params.id
    const person = persons.find(person => person.id === id)
    res.json(person)
})

app.delete('/persons/:id',(req,res) => {
    const id = req.params.id
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

function generateId() {
    const maxId = persons.length > 0 ? Math.max(...persons.map(p => Number(p.id))) : 0
    return String(maxId + 1)
}

app.post('/api/persons' ,(req,res) => {
    const data = req.body
    data.id = generateId()
    const dataDupl = persons.find(p => p.name === data.name)
    if(!data.number | !data.name) {
      return res.status(400).json({error: 'name and number are required'})
    }
    else if(dataDupl) {
      return res.status(400).json({error: 'name must be unique'})
    }
    else {
      persons = [...persons, data]
      res.json(data)
    }
})

app.get('/info',(req,res) => {
    res.send(`<p>phonebook has info for ${persons.length} people</p>
        <p>${d}</p>`)
})

const port = 3001
app.listen(port,
    () => console.log(`Server is running on port ${port}`)
)