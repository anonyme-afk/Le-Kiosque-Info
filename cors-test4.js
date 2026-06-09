fetch("https://games.gamepix.com/games").then(r => console.log("CORS Origin:", r.headers.get("access-control-allow-origin")))
