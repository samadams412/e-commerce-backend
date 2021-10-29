# E-Commerce Back End Server

#### Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Video Walkthrough](#walk-through-video)
5. [Collaborating](#collaborating)
6. [Questions](#questions)

## Project Description

- This application is acts as the back end for an e-commerce site. MySQL2 and Sequelize Packages were used to connect my Express.js API to a MySQL database and a dotenv package was used to store sensitive data into environment variables. This application demonstrates the use of Database Models and using assosciation methods on those Sequelize models to create relationships between them. Also illustrated is the API Routes required to perform RESTful CRUD Operations.

## Installation Instructions

- Clone the repository from [Github](https://github.com/samadams412/e-commerce-backend)<br>
- This application requires Node.js, Express.js, and Sequelize. So run an `npm install`.
- Be sure to update .env file to contain user's username and password.
- To conect to the Database run `mysql -u root -p`, followed by `source ./db/schema.sql` and then `exit`.
- Then seed the data by running the script `npm run seed`.
- Lastly, Connect to the server `npm start`.

## Usage Information

- This back end application allows users to create, delete, or view categories, products, and tags.

## Walk Through Video

- The following video demonstrates how to create the schema from the MySQL shell, seed the database from the command line, and start the application’s server.
- The video also demonstrates GET routes for all categories, all products, all tags, GET routes for a single category, a single product, and a single tag. POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.<br>
- [Application Demo](https://watch.screencastify.com/v/dLpLoHPJWERzB62U1L5U)

  

## Collaborating

- For general comments, ideas, or bugs. Please report to [here](https://github.com/samadams412/e-commerce-backend/issues).

## Questions

- Contact me on Github [samadams412](https://github.com/samadams412)
- or by Email at samueladams412@gmail.com
