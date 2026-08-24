/**
 * Unity UI Kit - Interactive Behaviors
 * Vanilla JS, no dependencies. Auto-initializes on DOMContentLoaded.
 */
(function () {
  'use strict';

  const Unity = {};

  // --- Utilities ---
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  // --- Modal ---
  const modalStack = [];

  Unity.modal = {
    /** Open a modal by its id */
    open(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.add('visible');
      modal.setAttribute('aria-hidden', 'false');
      modalStack.push(modal);
      trapFocus(modal);
    },
    /** Close a modal by its id */
    close(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove('visible');
      modal.setAttribute('aria-hidden', 'true');
      const idx = modalStack.indexOf(modal);
      if (idx > -1) modalStack.splice(idx, 1);
    }
  };

  function trapFocus(modal) {
    const focusable = qsa('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])', modal);
    if (focusable.length) focusable[0].focus();
    modal._focusTrap = function (e) {
      if (e.key !== 'Tab' || !modal.classList.contains('visible')) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', modal._focusTrap);
  }

  function initModals() {
    document.addEventListener('click', function (e) {
      const opener = e.target.closest('[data-unity-modal-open]');
      if (opener) { Unity.modal.open(opener.getAttribute('data-unity-modal-open')); return; }
      const closer = e.target.closest('[data-unity-modal-close]');
      if (closer) {
        const modal = closer.closest('.unity-modal-overlay') || closer.closest('[id]');
        if (modal && modal.id) Unity.modal.close(modal.id);
        return;
      }
      if (e.target.classList.contains('unity-modal-overlay')) {
        if (e.target.id) Unity.modal.close(e.target.id);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalStack.length) {
        const top = modalStack[modalStack.length - 1];
        Unity.modal.close(top.id);
      }
    });
  }

  // --- Tabs ---
  Unity.tabs = {
    /** Activate a tab element and show its panel */
    activate(tab) {
      const tablist = tab.closest('.unity-tablist');
      if (!tablist) return;
      qsa('.unity-tab', tablist).forEach(function (t) {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('active');
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      });
      tab.setAttribute('aria-selected', 'true');
      tab.classList.add('active');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) panel.hidden = false;
      tab.focus();
    }
  };

  function initTabs() {
    document.addEventListener('click', function (e) {
      const tab = e.target.closest('.unity-tab[role="tab"]');
      if (tab) Unity.tabs.activate(tab);
    });
    document.addEventListener('keydown', function (e) {
      const tab = e.target.closest('.unity-tab[role="tab"]');
      if (!tab) return;
      const tablist = tab.closest('.unity-tablist');
      const tabs = qsa('.unity-tab[role="tab"]', tablist);
      const idx = tabs.indexOf(tab);
      let next = -1;
      if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
      if (next > -1) { e.preventDefault(); Unity.tabs.activate(tabs[next]); }
    });
  }

  // --- Toast ---
  Unity.toast = {
    /** Show a toast notification */
    show({ message, type = 'info', duration = 5000 } = {}) {
      let container = qs('.unity-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'unity-toast-container';
        container.style.cssText = 'position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:0.5rem;';
        document.body.appendChild(container);
      }
      const toast = document.createElement('div');
      toast.className = 'unity-toast unity-toast--' + type + ' entering';
      toast.setAttribute('role', 'alert');
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(function () { toast.classList.remove('entering'); }, 200);
      setTimeout(function () {
        toast.remove();
        if (!container.children.length) container.remove();
      }, duration);
    }
  };

  // --- Dropdown ---
  function initDropdowns() {
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('[data-unity-dropdown]');
      if (toggle) {
        e.stopPropagation();
        const menu = toggle.nextElementSibling;
        if (!menu || !menu.classList.contains('unity-dropdown-menu')) return;
        const open = menu.classList.toggle('visible');
        toggle.setAttribute('aria-expanded', String(open));
        return;
      }
      // Close all open dropdowns on outside click
      qsa('.unity-dropdown-menu.visible').forEach(function (m) {
        m.classList.remove('visible');
        const btn = m.previousElementSibling;
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        qsa('.unity-dropdown-menu.visible').forEach(function (m) {
          m.classList.remove('visible');
          const btn = m.previousElementSibling;
          if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
        });
      }
    });
  }

  // --- Tooltip ---
  let activeTooltip = null;

  function showTooltip(el) {
    const text = el.getAttribute('data-unity-tooltip');
    if (!text) return;
    const tip = document.createElement('div');
    tip.className = 'unity-tooltip';
    tip.textContent = text;
    tip.id = 'unity-tip-' + Math.random().toString(36).slice(2, 9);
    document.body.appendChild(tip);
    el.setAttribute('aria-describedby', tip.id);
    const rect = el.getBoundingClientRect();
    tip.style.cssText = 'position:absolute;z-index:10000;';
    const tipRect = tip.getBoundingClientRect();
    tip.style.left = rect.left + (rect.width - tipRect.width) / 2 + window.scrollX + 'px';
    tip.style.top = rect.top - tipRect.height - 8 + window.scrollY + 'px';
    activeTooltip = { el, tip };
  }

  function hideTooltip() {
    if (!activeTooltip) return;
    activeTooltip.el.removeAttribute('aria-describedby');
    activeTooltip.tip.remove();
    activeTooltip = null;
  }

  function initTooltips() {
    document.addEventListener('mouseenter', function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute('data-unity-tooltip')) showTooltip(e.target);
    }, true);
    document.addEventListener('mouseleave', function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute('data-unity-tooltip')) hideTooltip();
    }, true);
    document.addEventListener('focusin', function (e) {
      if (e.target.hasAttribute('data-unity-tooltip')) showTooltip(e.target);
    });
    document.addEventListener('focusout', function (e) {
      if (e.target.hasAttribute('data-unity-tooltip')) hideTooltip();
    });
  }

  // --- Accordion / Collapsible ---
  function initAccordions() {
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-unity-collapse]');
      if (!trigger) return;
      const targetId = trigger.getAttribute('data-unity-collapse');
      const target = document.getElementById(targetId);
      if (!target) return;
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        target.style.maxHeight = target.scrollHeight + 'px';
        requestAnimationFrame(function () { target.style.maxHeight = '0'; });
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        target.style.maxHeight = target.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
        target.addEventListener('transitionend', function handler() {
          target.style.maxHeight = '';
          target.removeEventListener('transitionend', handler);
        });
      }
    });
  }

  // --- Init ---
  function init() {
    initModals();
    initTabs();
    initDropdowns();
    initTooltips();
    initAccordions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.Unity = Unity;
})();
