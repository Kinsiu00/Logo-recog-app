const express = require('express');
const app = express();
const path = require('path')
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')

const port = process.env.PORT || 3024

// // Imports the Google Cloud client library.
// const Storage = require('@google-cloud/storage');

// // Instantiates a client. Explicitly use service account credentials by
// // specifying the private key file. All clients in google-cloud-node have this
// // helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// const storage = new Storage({
//     keyFilename: '../confidential.json'
//   });

// // Makes an authenticated API request.
// storage
//   .getBuckets()
//   .then((results) => {
//     const buckets = results[0];

//     console.log('Buckets:');
//     buckets.forEach((bucket) => {
//       console.log(bucket.name);
//     });
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });

// const vision = require('@google-cloud/vision');



// app.use(express.static(path.join(__dirname, '../ui/build')))
// app.use(morgan('dev'));
// app.use(cors());
// app.use(express.json())

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

// app.post('/visionApi', (req, res, next) => {
//     const vision = require('@google-cloud/vision');

// // Creates a client
// const client = new vision.ImageAnnotatorClient();
// const request = {
//     image: {
//         source: {
//             imageUri:"https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
//         }
//     }
// }

// // Performs label detection on the image file
// client
//   .labelDetection(request)
//   .then(results => {
//     const labels = results[0].labelAnnotations;

//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
// })


app.post('/vision', (req, res, next) => {
    console.log(req.body)
    const road = 'https://vision.googleapis.com/v1/images:annotate?key='
    // const picture = req.body.image
    const payload = {
        "requests":[
          {
			"image":{
        		"source":{
                    "imageUri": "https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
                }
        	},
            "features":[
              {
                "type":"LABEL_DETECTION",
                "maxResults":1
              }
            ]
          }
        ]
      }
    
    axios.post(road, payload)
        .then(response => {
            console.log(response)
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