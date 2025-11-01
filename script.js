document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     Helpers
  ========================= */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* =========================
     Header scroll behavior
  ========================= */
  const header = $('header');
  const onScrollHeader = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* =========================
     Mobile Menu Hamburger
  ========================= */
  const hamburger = $('.mobile-menu');
  const navLinks = $('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  /* =========================
     Submenu toggle
  ========================= */
  $$('.has-submenu').forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.submenu');
    link.addEventListener('click', e => {
      // Prevent default only if there is a submenu
      if (submenu) {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });

  /* =========================
     Smooth scroll
  ========================= */
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = $(href);
      if (!target) return;
      e.preventDefault();
      const headerOffset = header ? header.offsetHeight + 8 : 0;
      const top = Math.max(target.getBoundingClientRect().top + window.scrollY - headerOffset, 0);
      window.scrollTo({ top, behavior: 'smooth' });

      // Fecha menu mobile ao clicar
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });

  /* =========================
     Scroll-to-top button
  ========================= */
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.type = 'button';
  scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
  scrollBtn.innerHTML = '↑';
  document.body.appendChild(scrollBtn);

  const toggleScrollBtn = () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  };
  toggleScrollBtn();
  window.addEventListener('scroll', toggleScrollBtn, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* =========================
     Modal
  ========================= */
  window.showModal = function() {
    const modal = $('#modal');
    if (modal) modal.style.display = 'flex';
  };

  window.closeModal = function() {
    const modal = $('#modal');
    if (modal) modal.style.display = 'none';
  };

  /* =========================
     Toast
  ========================= */
  window.showToast = function(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => toast.remove(), 4000);
  };

  /* =========================
     CEP mask + ViaCEP autofill
  ========================= */
  const cepInput = $('#cep');
  if (cepInput) {
    const maskCep = val => {
      const digits = val.replace(/\D/g, '').slice(0, 8);
      return digits.length <= 5 ? digits : digits.slice(0, 5) + '-' + digits.slice(5);
    };

    cepInput.addEventListener('input', e => {
      const pos = cepInput.selectionStart;
      cepInput.value = maskCep(cepInput.value);
      cepInput.selectionStart = cepInput.selectionEnd = pos;
    });

    cepInput.addEventListener('blur', async () => {
      const raw = cepInput.value.replace(/\D/g, '');
      if (raw.length !== 8) return;
      cepInput.setAttribute('data-loading', 'true');

      try {
        const res = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
        if (!res.ok) throw new Error('Erro na requisição ViaCEP');
        const data = await res.json();
        if (data.erro) showFieldError(cepInput, 'CEP não encontrado');
        else {
          clearFieldError(cepInput);
          const map = {
            endereco: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            estado: data.uf || ''
          };
          Object.entries(map).forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (el) el.value = val;
          });
        }
      } catch (err) {
        console.warn('ViaCEP falhou', err);
      } finally {
        cepInput.removeAttribute('data-loading');
      }
    });
  }

  /* =========================
     Form Handling
  ========================= */
  const handleForm = (formSelector, successMsg = 'Enviado com sucesso!') => {
    const form = document.querySelector(formSelector);
    if (!form) return;
    const submitBtn = form.querySelector('button[type="submit"]');

    const disableSubmit = () => submitBtn && (submitBtn.disabled = true);
    const enableSubmit = () => submitBtn && (submitBtn.disabled = false);

    form.addEventListener('submit', async e => {
      e.preventDefault();
      clearFormErrors(form);
      let valid = true;

      $$('[required]', form).forEach(field => {
        if (!field.value || String(field.value).trim() === '') {
          valid = false;
          showFieldError(field, 'Campo obrigatório');
        }
      });

      const cepField = form.querySelector('#cep');
      if (cepField && cepField.value && !/^\d{5}-\d{3}$/.test(cepField.value)) {
        valid = false;
        showFieldError(cepField, 'Formato do CEP deve ser 00000-000');
      }

      if (!valid) {
        const firstErr = form.querySelector('.field-error');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      try {
        disableSubmit();
        if (submitBtn) {
          submitBtn.dataset.origText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Enviando...';
        }
        await new Promise(r => setTimeout(r, 900));
        showFormSuccess(form, successMsg);
        form.reset();
      } catch (err) {
        console.error(err);
        showFormError(form, 'Erro ao enviar. Tente novamente.');
      } finally {
        if (submitBtn) submitBtn.innerHTML = submitBtn.dataset.origText || 'Enviar';
        enableSubmit();
      }
    });
  };

  handleForm('form[action="#"]', 'Obrigado! Formulário enviado.');

  /* =========================
     Helpers for form errors and success
  ========================= */
  function showFieldError(field, msg) {
    clearFieldError(field);
    field.classList.add('input-error');
    const err = document.createElement('div');
    err.className = 'field-error';
    err.textContent = msg;
    field.insertAdjacentElement('afterend', err);
  }

  function clearFieldError(field) {
    field.classList.remove('input-error');
    const next = field.nextElementSibling;
    if (next && next.classList.contains('field-error')) next.remove();
  }

  function clearFormErrors(form) {
    $$('.field-error', form).forEach(n => n.remove());
    $$('input, select, textarea', form).forEach(i => i.classList.remove('input-error'));
  }

  function showFormSuccess(form, msg) {
    const box = document.createElement('div');
    box.className = 'form-success';
    box.textContent = msg;
    const old = form.querySelector('.form-success');
    if (old) old.remove();
    form.appendChild(box);
    setTimeout(() => box.remove(), 3500);
  }

  function showFormError(form, msg) {
    const box = document.createElement('div');
    box.className = 'form-error';
    box.textContent = msg;
    const old = form.querySelector('.form-error');
    if (old) old.remove();
    form.appendChild(box);
    setTimeout(() => box.remove(), 3500);
  }
});
