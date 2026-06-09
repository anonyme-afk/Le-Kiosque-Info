const { chromium } = require('playwright');
const path = require('path');

const games = [
  '2048', 'asteroids', 'breakout', 'flappy', 'minesweeper',
  'pacman', 'pong', 'snake', 'spaceinvaders', 'tetris'
];

async function testAll() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  for (let g of games) {
    console.log(`\n--- Testing ${g} ---`);
    let errors = 0;
    page.on('pageerror', e => { console.log('JS Error:', e.message); errors++; });
    page.on('console', msg => { if(msg.type() === 'error') { console.log('Console Error:', msg.text()); errors++; } });
    page.on('requestfailed', request => {
      console.log('Failed request:', request.url(), request.failure().errorText);
      errors++;
    });

    await page.goto(`http://localhost:3000/games/${g}/index.html`, { waitUntil: 'load', timeout: 5000 }).catch(e => {
        console.log('Timeout/Load error:', e.message);
        errors++;
    });
    
    await page.waitForTimeout(1000);
    console.log(`Result: ${errors === 0 ? 'OK' : errors + ' Errors'}`);
    
    page.removeAllListeners('pageerror');
    page.removeAllListeners('console');
    page.removeAllListeners('requestfailed');
  }
  
  await browser.close();
}
testAll();
