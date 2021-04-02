/*
Importation des librairies
 */
const fetch = require('snekfetch');
(async () => {
    let data = {
        energy: Math.floor(Math.random() * 100)
    }
    /*
    Requete vers l'api (pour rafraichir le graphique avec le websocket)
     */
    await fetch.post('http://localhost:3000/dataRequest').send(data).then(r => r.body.toString()).then(console.log)
})()