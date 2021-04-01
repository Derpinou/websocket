const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;
const body = require('body-parser')

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


http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
























/*


    const width = 400; //px
    const height = 400; //px
    const chartJSNodeCanvas = new ChartJSNodeCanvas({width, height});


    const configuration = {
        type: "line",
        data: {
            labels: [76, 100, 125, 290], //[45,56,29,100]
            datasets: [
                {
                    label: "first",
                    data: [[45, 56, 29, 100]],
                    borderColor: "#99aab5"
                }
            ]
        },
        //options
    };
    const image = await chartJSNodeCanvas.renderToDataURL(configuration);
 */