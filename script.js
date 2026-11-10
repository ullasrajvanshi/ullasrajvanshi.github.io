document.documentElement.classList.add('js');

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menu?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation?.classList.toggle('is-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const printButton = document.querySelector('#print-cv');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

const engagementLabels = {
  explore: 'Explore the right starting point',
  shape: 'Shape the programme',
  reset: 'Reset delivery',
  lead: 'Lead implementation'
};

function buildProjectEmail({ name, email, company, engagement, message }) {
  const service = engagementLabels[engagement] || engagementLabels.explore;
  const subject = `Project enquiry: ${service}${company.trim() ? ` — ${company.trim()}` : ''}`;
  const body = [
    'Hi Ullas,',
    '',
    `I would like to discuss: ${service}.`,
    '',
    message.trim(),
    '',
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    ...(company.trim() ? [`Company: ${company.trim()}`] : []),
    '',
    'Looking forward to connecting.'
  ].join('\r\n');
  return `mailto:ullasrajvanshi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const brief = document.querySelector('#project-brief');
if (brief) {
  brief.hidden = false;
  const service = brief.elements.namedItem('engagement');
  const status = document.querySelector('#brief-status');

  document.querySelectorAll('[data-engagement]').forEach(link => {
    link.addEventListener('click', () => {
      const requested = link.dataset.engagement;
      if (Object.hasOwn(engagementLabels, requested)) {
        service.value = requested;
        status.textContent = '';
      }
    });
  });

  for (const fieldName of ['name', 'message']) {
    const field = brief.elements.namedItem(fieldName);
    field.addEventListener('input', () => field.setCustomValidity(''));
  }

  brief.addEventListener('submit', event => {
    event.preventDefault();
    for (const fieldName of ['name', 'message']) {
      const field = brief.elements.namedItem(fieldName);
      field.setCustomValidity(field.value.trim() ? '' : 'Please enter a little more detail.');
    }
    if (!brief.reportValidity()) return;
    const values = Object.fromEntries(new FormData(brief));
    const href = buildProjectEmail(values);
    window.location.assign(href);
    status.textContent = 'Your email app should open with your project brief. Review and send it there. If it did not open, use the email link alongside this form.';
  });
}
