# Logo-Recognition-App

A foray into larger web services - A basic application that utilizes Google Vision API to identify logos <br>
using images in .png, .jpeg format before referencing a database to return information on the logo.

## Getting Started

Clone this repo and run "npm install" on the root directory as well as the "ui" directory. <br>
From there, you should be able to run the command "yarn dev" to start the server as well as the react-client.

### Prerequisites

- Some knowledge of PostgreSQL
- Knex and ability to run migrations
- a Google Vision API Key.


### Installing

NOTE: the current database needs to be configured to your database.
- In your terminal, run 'createdb {DATABASE}'
- In knexfile.js, change the connection to: 'postgres://localhost/{DATABASE}'.
  - on Linux and Windows systems, PostgreSQL may require a username/password for PostgreSQL. Please refer to PostgreSQL 
  documentation for details: https://www.postgresql.org/docs/10/static/client-authentication.html
  - ie: 'postgres://{USERNAME}:{PASSWORD}@localhost/{DATABASE NAME}'
- Run migrations from the root directory with the command "knex migrate:latest" to get the proper table.
- Run the command "knex seed:run" to seed the database with the example companies.

Once the database and connection has been set up, simply run "yarn dev" in the root directory of the backend.

NOTE:
A Google Vision API Key is needed!
 - Create a file named "key.js" on the root directory and place the key inside as a variable.
   ie: const key = 'key1234'
 - Export the key (path is already configured), end the file with "module.exports = key"

## How to use

Currently, the example data contains 2 companies: Galvanize and Wandering Bear Coffee. <br>
To test it, locate an image of one of the companies and copy the link to the jpeg/png file. <br>
paste the link into the box and hit "submit". <br>

Give it a bit of time, but if successful, it should return the logo and information from the local server.

## Built With

* Javascript
* [Google Vision](https://cloud.google.com/vision/) - Used to analyse the image.
* [PostgreSQL](https://rometools.github.io/rome/) - Used for the database.
* [Knex](https://knexjs.org/) - Used for accessing database.

## Authors

Kin Siu - [Kinsiu00](https://github.com/Kinsiu00/)

## License


This project is licensed under the MIT License.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
