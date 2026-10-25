// Road Queen Fitness — boots each section. Content renders first so the
// reveal and parallax effects can find everything on the page.
import { initNav, initEffects } from './nav.js';
import { initClasses } from './classes.js';
import { initLive } from './live.js';
import { initVideos } from './videos.js';
import { initUploads } from './uploads.js';
import { initShop } from './shop.js';
import { initJoin } from './join.js';

document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();

const run = (init) => {
  try {
    init();
  } catch (err) {
    // One broken section shouldn't take the rest of the page down.
    console.error(`${init.name} failed`, err);
  }
};

[initJoin, initClasses, initLive, initUploads, initNav, initEffects].forEach(run);

// The video library and shop sit well below the fold: build them once the
// first screen is on display, so they don't delay it.
const whenIdle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1));
whenIdle(() => [initVideos, initShop].forEach(run), { timeout: 300 });
