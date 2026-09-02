/* Adds a small Dark/Light toggle to a @dsCard specimen so both themes can be checked
   in place. Purely a documentation affordance — not part of the shipped system.

   Dark is the default on open, always. A card that declares its own data-theme keeps it
   (brand-pattern.html is authored light because the print presentation IS the light one).
   Toggling is per-card and deliberately NOT persisted across loads — a stored preference
   must never decide what a card looks like when someone opens it. */
(() => {
  const root = document.documentElement;
  const declared = root.getAttribute('data-theme');

  if (!declared) root.dataset.theme = 'dark';

  const mount = () => {
    /* Reserve room so the control never sits on top of the specimen. */
    const pad = document.createElement('style');
    pad.textContent = 'body{padding-bottom:26px!important}';
    document.head.appendChild(pad);

    const btn = document.createElement('button');
    btn.type = 'button';
    const paint = () => {
      btn.textContent = root.dataset.theme === 'dark' ? 'Dark' : 'Light';
      btn.style.cssText = [
        'position:fixed', 'bottom:6px', 'right:8px', 'z-index:9999',
        'font:500 9px/1 var(--font-sans, system-ui)', 'letter-spacing:1.4px',
        'text-transform:uppercase', 'padding:4px 9px', 'border-radius:20px', 'cursor:pointer',
        'border:1px solid var(--border)', 'background:var(--gold-dim)', 'color:var(--gold)',
        'transition:background .2s, color .2s'
      ].join(';');
    };
    btn.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      paint();
    });
    paint();
    document.body.appendChild(btn);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
