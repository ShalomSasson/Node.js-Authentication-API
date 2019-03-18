
  

  # Node.js Authentication API
**Node.js Authentication API** is a sample project that implement authentication mechanism.<br/>
in this code sample based **Node.js** solution we implement the next API functionally:
 - **Registration Service** :  <br/>
   register new user with basic input fields + password, the password saved encrypted in DB
   ``` json
   {
       "firstName" : "Shalom",
       "lastName" : "Sasson",
       "email": "Shalom_1@mydomain.com",
       "password":"123456"
   }
   ```
 - **Login Service** :  <br/>
    Login with Email\User Name + password and the service check if the user exist & if the password is match
   ``` json
   {
       "email": "Shalom_1@mydomain.com",
       "password":"123456"
   }
   ```

## MongoDB
we use MongoDB for with this solution for storing data.
if you dont have MongoDB install on you machine, here attached MongoDB on docker compose file, ***`  docker-compose.yml  `*** 

Run mongoDB with docker:

```sh
> docker-compose up
```



## Installation

**'npm install'** will install all packages that related to this project.

```bash
npm install 
```
#### npm modules

Attached are list of all node packages that will be installed :
- bcrypt
- config
- express
- joi
- joi-password-complexity
- lodash
- mongoose

## How to use

The following example use default with MongoDB on Docker.
HTTP server listening on port `3000`.

```bash
$ npm start

> nodejs_authentication_api@1.0.0 start .........
> node index.js

Listening on port 3000...
Connected to MongoDB at ....... mongodb://Demo:Demo@localhost:27017/Auth?authSource=adminconst 

```

## Postman

here attached postman collection for testing the running services.
import  ***`  postman_collection.json  `*** file to postman , run the application and test the services with attached services definition.

<p align="center">
  <a href="/images/postman.png">
    <img
      alt="Node.js"
      src="/images/postman.png"
      width="900"
    />
  </a>
</p>





## Documentation

Please see this README documentation [here](README.md). Contributions are welcome!

## License

[GNU General Public License v3.0](https://github.com/ShalomSasson/Node.js-Authentication-API/blob/master/LICENSE)


