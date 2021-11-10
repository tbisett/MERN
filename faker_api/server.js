


const express = require("express");
const app = express();
const port = 8000;

const faker = require("faker")

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.pass = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (request, response) => {
    response.json(new User())
})

app.get("/api/companies/new", (request, response) => {
    response.json(new Company())
})

app.get("/api/user/company/new", (request, response) => {
    response.json([new User(), new Company()])
})
    
// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
