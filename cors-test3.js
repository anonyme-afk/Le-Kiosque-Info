fetch("https://games.gamepix.com/games").then(r => r.json()).then(d => console.log(d.data.slice(0, 2))).catch(e => console.error(e))
