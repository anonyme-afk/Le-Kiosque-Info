fetch("https://games.gamepix.com/games?sid=1", {method:"HEAD"}).then(r => console.log(r.status, r.headers.get("access-control-allow-origin"))).catch(e => console.error(e))
