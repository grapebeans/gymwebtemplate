const hamburger = document.querySelector('.hamburger');
const mobileDrawer = document.querySelector('.mobile-drawer');
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');
const accordionButtons = document.querySelectorAll('.accordion-item button');
const modal = document.querySelector('#booking-modal');
const modalClose = document.querySelector('.modal-close');
const modalTriggers = document.querySelectorAll('[data-open-modal="booking"]');
const floatingCta = document.querySelector('.floating-cta');
const yearEl = document.querySelector('#year');

// Set current year
yearEl.textContent = new Date().getFullYear();

mobileDrawer?.setAttribute('aria-hidden', 'true');

// Mobile nav
hamburger?.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  mobileDrawer?.classList.toggle('open');
  mobileDrawer?.setAttribute('aria-hidden', String(expanded));
});

// Tabs
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach((panel) => {
      panel.classList.remove('active');
      panel.setAttribute('hidden', '');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.querySelector(#${tab.dataset.tab});
    panel?.classList.add('active');
    panel?.removeAttribute('hidden');
  });
});

// Accordion
accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    accordionButtons.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
      btn.parentElement?.classList.remove('open');
    });
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      item?.classList.add('open');
    }
  });
});

// Modal
const openModal = () => {
  modal?.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modal?.querySelector('input, select')?.focus();
};

const closeModal = () => {
  modal?.setAttribute('hidden', '');
  document.body.style.overflow = '';
};

modalTriggers.forEach((button) => button.addEventListener('click', openModal));
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hasAttribute('hidden')) {
    closeModal();
  }
});

// Floating CTA visibility
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 200) {
    floatingCta?.classList.add('hidden');
  } else {
    floatingCta?.classList.remove('hidden');
  }
  lastScroll = current;
});
