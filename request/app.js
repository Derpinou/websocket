/*
Importation des librairies
 */
const fetch = require('snekfetch');
(async () => {
    let data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: "#2c2f33",
            borderColor: "#7289da",
            data: [
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200),
                Math.floor(Math.random() * 200)
            ],
            fill: false,
        }]
    }
    /*
    Requete vers l'api (pour rafraichir le graphique avec le websocket)
     */
    await fetch.post('http://localhost:3000/request').send(data).then(r => r.body.toString()).then(console.log)
})()