require("dotenv").config();
const express = require ("express");
const {connectToMongoDB} = require("./database");
const path = require("path")

const cors = require('cors'); 

const app = express();

app.use(cors({
    origin: 'http://todo-frontend-facul-app-prod.s3-website-us-east-1.amazonaws.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"build")));
app.get("/"), (req,res) => {
    res.sendFile(path.join(__dirname,"build/index.html"))
}

const router = require("./routes");
app.use("/api", router)

const port = process.env.PORT || 5000;

async function startServer(){
    await connectToMongoDB();
    app.listen(port,() => {
        console.log(`Server esta rodando em  http://localhost:${port}`);
        });
}

startServer();