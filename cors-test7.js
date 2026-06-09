fetch("https://games.gamepix.com/games?page=2&limit=5").then(r => r.json()).then(d => console.log(d.data.length, d.data[0].id)).catch(e => console.error(e))
