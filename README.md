
  
# Node.js Authentication API
<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

**Node.js Authentication API**  is an code sample based Node.js solution that implement the next API functionally:
 - **Registration Service** : register new user 
 - **Login Service** : login user 

we use 



## MongoDB
we use MongoDB for with this solution for storing data.
if you dont have MongoDB install on you machine, here attached MongoDB on docker compose file, ***`  docker-compose.yml  `*** 

Run mongoDB with docker:

```sh
> docker-compose up
```
## npm modules

Attached is a list of node packages that we use in this project :
- bcrypt
- config
- express
- joi
- joi-password-complexity
- lodash
- mongoose


## Postman

here attached postman collection for testing the running services.
import  ***`  postman_collection.json  `*** file to postman , run the application and test the services with attached services definition.

<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="/images/vscode.png"
      width="400"
    />
  </a>
</p>

Some implementations in other languages are also available:

- [Java](https://github.com/socketio/socket.io-client-java)
- [C++](https://github.com/socketio/socket.io-client-cpp)
- [Swift](https://github.com/socketio/socket.io-client-swift)
- [Dart](https://github.com/rikulo/socket.io-client-dart)

Its main features are:

#### Reliability

## Installation

```bash
npm install 
```

## How to use

The following example use default with MongoDB on Docker.
HTTP server listening on port `3000`.

```js
$ npm start

> nodejs_authentication_api@1.0.0 start .........
> node index.js

Listening on port 3000...
Connected to MongoDB at ....... mongodb://Demo:Demo@localhost:27017/Auth?authSource=adminconst 

```


## Documentation

Please see this README documentation [here](README.md). Contributions are welcome!

## License

GNU GENERAL PUBLIC LICENSE

