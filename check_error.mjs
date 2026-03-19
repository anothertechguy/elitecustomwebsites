import { chromium } from '@playwright/test';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
       console.error(`[Browser Error]: ${msg.text()}`);
    } else {
       console.log(`[Browser Log]: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    console.error(`[Uncaught Exception]: ${err.stack || err.message}`);
  });

  console.log('Navigating to http://localhost:8080...');
  try {
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });
  } catch (e) {
    console.error('Failed to load page:', e);
  }

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
})();
