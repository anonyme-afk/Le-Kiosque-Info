fetch("https://games.gamepix.com/games").then(r => r.json()).then(d => console.log(d.data.length)).catch(e => console.error(e))
