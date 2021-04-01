/*
Importation des dépendances
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
const body = require('body-parser')

/*
Setup de l'API / Serveur Web
 */
app.use(body())

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.post("/graphRequest", async (req, res) => {
    res.sendStatus(200);
    console.log('Got body:', req.body);
    io.emit('graph data', req.body)
    console.log("emited")
})

app.get('/data', async (req, res) => {
    res.sendFile(__dirname + '/public/html/data.html');
})

app.get('/chart', async (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

/*
Connection du Serveur Web sur le port 3000
 */
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});