# Create mongo-express-react application 

## Environment set up
``` bash
# install express
npm i express concurrently

# install monitor for development
npm i nodemon cors --save-dev

# set environment
npm i --save-dev dotenv

# install mongodb tool
npm i mongoose

# install react (client)
npm i -g create-react-app

# create react app (client)
create-react-app <app-name>

# react style (client)
npm install @material-ui/core

# (optional) 
node-snippets extension
```

## Quick start
```bash
# Install dependencies
npm install

# Run the client & server with concurrently
npm run dev

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Project structure
```
INFSCI 2560 -- Final Project
│   README.md    
│
└───client
│   └───src
│       └───component
│       │   App.js
│       │   index.js (Entry)
│       │   ...
│   
└───server
│   │   └───controller
│   │   │   author.js
│   │   │   post.js
│   │   │ 
│   │
│   └───models
│   │   │   authorInfo.js
│   │   │   postInfo.js
│   │   │ 
│   │
│   └───routers
│   │   │   authors.js
│   │   │   posts.js
│   │   │ 
│   │
│   └───server.js
│   │   │   post.js
│   │   │ 
│

```


## App Info

### Author

Yi Tao

### Version

1.0.0

### License

MIT License
