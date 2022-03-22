// The Initial Code Of This File Is Copied From "C:\Users\best\Desktop\vartETH\server\app.js", For More Info Check That File. Every Thing Is Explained In That File With Real Source Of Info.
// This App Is Just Created For Creating Realtime API, Which Will Scrap Data Of Other Website And It Will Provide Scraped Data On Request.
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
// const cors = require('cors');
const path = require("path");

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true
// }))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const port = process.env.PORT || 8000;

const giveData = require("./routes/giveData.js");
app.use("/giveData", giveData.router);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

http.listen(port, () => {
    console.log("Ok")
})

const tempFunc = () => {
    setInterval(async () => {
        io.sockets.emit('getData', await giveData.fetchData());
    }, 10000)
}
tempFunc();

io.on('connection', (socket) => {
    console.log("Connected Done Using Sockets");
    socket.emit("temp", "Hello Guys")
})