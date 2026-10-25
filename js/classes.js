// HOME: one photo card per weekly class. The photo is the card's background
// and the class name is its title; each card leads to the live schedule.
import { CLASSES } from './data.js';
import { upcomingSessions, relativeWhen } from './live.js';
import { $, esc, icon } from './ui.js';

const PLATFORM = { zoom: { label: 'Zoom', icon: 'zoom' }, ig: { label: 'IG Live', icon: 'instagram' } };

export function initClasses() {
  const sessions = upcomingSessions();
  $('#class-cards').innerHTML = CLASSES.map((c) => {
    const next = sessions.find((s) => s.id === c.id);
    const p = PLATFORM[c.platform];
    return `<a class="class-card" href="#live" data-reveal>
      <img src="${c.photo}" alt="" loading="lazy" style="object-position:${c.photoPos}">
      <span class="class-tag">${icon(p.icon)} ${p.label} · ${c.minutes} min</span>
      <span class="class-body">
        <span class="class-kicker">${esc(c.kicker)}</span>
        <strong class="class-name">${esc(c.title)}</strong>
        <span class="class-blurb">${esc(c.blurb)}</span>
        ${next ? `<span class="class-when">${icon('clock')} Next: ${relativeWhen(next.start)}</span>` : ''}
        <span class="class-cta">See times &amp; RSVP ${icon('arrow')}</span>
      </span>
    </a>`;
  }).join('');
}
