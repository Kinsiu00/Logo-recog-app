const express = require('express');
const app = express();
const path = require('path')
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')

const port = process.env.PORT || 3024

app.use(express.static(path.join(__dirname, '../ui/build')))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.get('/companies', (req, res, next) => {
    knex('companies')
        .orderBy('name', 'desc')
        .then(companies => res.json({companies: companies}))
})

app.post('/companies', (req, res, next) => {
    knex('companies').insert(req.body).then(() => {
      knex('companies')
        .orderBy('name', 'desc')
        .then(companies => res.json(companies))
    })
  })

app.post('/vision', (req, res, next) => {
    console.log(req.body)
    const road = 'https://vision.googleapis.com/v1/images:annotate?key='
    const picture = req.body.image
    const payload = {
        "requests":[
          {
			"image":{
        		"source":{
                    "imageUri": picture
                }
        	},
            "features":[
              {
                "type":"LOGO_DETECTION",
                "maxResults":1
              }
            ]
          }
        ]
      }
    
    axios.post(road, payload)
        .then(response => {
           const descriptions = response.data.responses[0].logoAnnotations.map(label => {
                return label.description
            });
            knex('companies').where('name', descriptions[0]).then(result => {
                console.log(result[0])
                res.json(result[0])
            })
                })
        .catch(error => {
            console.log(error)
        })
})
  
  /* PATCH update a book. */
  app.patch('/companies/:id', function(req, res) {
    knex('companies')
        .update(req.body).where('id', req.params.id)
        .then(function() {
        knex('companies').orderBy('name', 'desc').then(companies => res.json(companies))
        })
    })
  
  app.delete('/companies/:id', (req, res, next) => {
    knex('companies')
        .del()
            .where('id', req.params.id)
        .then(() => {
            knex('companies').orderBy('name', 'desc').then(companies => res.json(companies))
        })
    })
  
app.get('/', (req, res, next) => {
    const index = path.join(__dirname, '../ui/build/index.html')
    res.sendFile(index)
  })

app.listen( port, () => {
    console.log(`${port} is now active.`)
})