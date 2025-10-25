// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------
     Helpers
  --------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------------------
     Header scroll behavior
  --------------------------- */
  const header = document.querySelector('header');
  const onScrollHeader = () => {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });

  /* ---------------------------
     Mobile menu toggle
  --------------------------- */
  const navLinks = $('.nav-links');
  const menuToggleBtn = document.querySelector('.menu-toggle');

  if (menuToggleBtn && navLinks) {
    menuToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggleBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    // Fechar menu ao clicar em link (UX)
    $$('.nav-links a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('active'))
    );
  }

  /* ---------------------------
     Smooth scroll for anchors
  --------------------------- */
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerOffset = header ? header.offsetHeight + 8 : 0;
      const top = Math.max(target.getBoundingClientRect().top + window.scrollY - headerOffset, 0);

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });

  /* ---------------------------
     Scroll-to-top button
  --------------------------- */
  const createScrollTopBtn = () => {
    const btn = document.createElement('button');
    btn.className = 'scroll-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.style.cssText = `
      position: fixed;
      right: 20px;
      bottom: 20px;
      display: none;
      padding: 0.6rem 0.8rem;
      border-radius: 12px;
      border: none;
      box-shadow: 0 6px 18px rgba(0,0,0,0.18);
      background: var(--cor-principal);
      color: white;
      z-index: 9999;
      cursor: pointer;
    `;
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    const toggle = () => {
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    toggle();
    window.addEventListener('scroll', toggle, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };
  createScrollTopBtn();

  /* ---------------------------
     CEP mask + ViaCEP autofill (cadastro)
     Works when an input with id="cep" exists
  --------------------------- */
  const cepInput = $('#cep');
  if (cepInput) {
    // Simple mask: 00000-000
    const maskCep = (value) => {
      const digits = value.replace(/\D/g, '').slice(0, 8);
      if (digits.length <= 5) return digits;
      return digits.slice(0,5) + '-' + digits.slice(5);
    };

    cepInput.addEventListener('input', (e) => {
      const pos = cepInput.selectionStart;
      cepInput.value = maskCep(cepInput.value);
      // restore caret roughly (simple attempt)
      cepInput.selectionStart = cepInput.selectionEnd = pos;
    });

    cepInput.addEventListener('blur', async () => {
      const raw = cepInput.value.replace(/\D/g, '');
      if (raw.length !== 8) return; // inválido
      // mostrar loading breve no campo
      cepInput.setAttribute('data-loading', 'true');

      try {
        const res = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
        if (!res.ok) throw new Error('Erro na requisição ViaCEP');
        const data = await res.json();
        if (data.erro) {
          // CEP não encontrado
          showFieldError(cepInput, 'CEP não encontrado');
        } else {
          clearFieldError(cepInput);
          // preencher campos se existirem
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
        // falha de rede — não bloquear o usuário
        console.warn('ViaCEP falhou', err);
      } finally {
        cepInput.removeAttribute('data-loading');
      }
    });
  }

  /* ---------------------------
     Form handling (cadastro & doação)
     - validação simples
     - feedback visual
     - impede múltiplos envios
  --------------------------- */
  const handleForm = (formSelector, onSuccessMessage = 'Enviado com sucesso!') => {
    const form = document.querySelector(formSelector);
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const disableSubmit = () => submitBtn && (submitBtn.disabled = true);
    const enableSubmit = () => submitBtn && (submitBtn.disabled = false);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearFormErrors(form);

      // validação básica: campos required preenchidos
      const requireds = $$('[required]', form);
      let valid = true;
      requireds.forEach(field => {
        if (!field.value || String(field.value).trim() === '') {
          valid = false;
          showFieldError(field, 'Campo obrigatório');
        }
      });

      // validação de CEP (se presente)
      const cepField = form.querySelector('#cep');
      if (cepField && cepField.value && !/^\d{5}-\d{3}$/.test(cepField.value)) {
        valid = false;
        showFieldError(cepField, 'Formato do CEP deve ser 00000-000');
      }

      if (!valid) {
        // rolar até o primeiro erro
        const firstErr = form.querySelector('.field-error');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Simular envio: impedir múltiplos envios e mostrar animação/sinal de sucesso
      try {
        disableSubmit();
        if (submitBtn) {
          submitBtn.dataset.origText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Enviando...';
        }

        // Aqui você pode integrar com API real. Como action="#" usamos timeout simulado.
        await new Promise(r => setTimeout(r, 900));

        // Feedback visual de sucesso
        showFormSuccess(form, onSuccessMessage);

        // reset do form apenas para formulários que não precisam persistir valores
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

  // aplica a ambos
  handleForm('form[action="#"]', 'Obrigado! Formulário enviado.');

  /* ---------------------------
     Visual helpers: mostrar/limpar erros/sucesso
  --------------------------- */
  function showFieldError(field, message) {
    clearFieldError(field);
    field.classList.add('input-error');
    const err = document.createElement('div');
    err.className = 'field-error';
    err.style.cssText = 'color:#9b2c2c;font-size:0.9rem;margin-top:6px;';
    err.textContent = message;
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

  function showFormSuccess(form, message) {
    // pequeno badge de sucesso temporário
    const box = document.createElement('div');
    box.className = 'form-success';
    box.style.cssText = `
      position: relative;
      margin-top: 1rem;
      padding: 1rem;
      background: #e9f7ef;
      border-left: 4px solid #2ecc71;
      color: #166534;
      border-radius: 8px;
      font-weight: 700;
    `;
    box.textContent = message;
    // remove mensagens antigas
    const old = form.querySelector('.form-success');
    if (old) old.remove();
    form.appendChild(box);
    // remover após 3.5s
    setTimeout(() => box.remove(), 3500);
  }

  function showFormError(form, message) {
    const box = document.createElement('div');
    box.className = 'form-error';
    box.style.cssText = `
      position: relative;
      margin-top: 1rem;
      padding: 1rem;
      background: #fff0f0;
      border-left: 4px solid #f44336;
      color: #7f1d1d;
      border-radius: 8px;
      font-weight: 700;
    `;
    box.textContent = message;
    const old = form.querySelector('.form-error');
    if (old) old.remove();
    form.appendChild(box);
    setTimeout(() => box.remove(), 5000);
  }

  /* ---------------------------
     Small accessibility / UX improvements
  --------------------------- */
  // Adiciona outline custom quando foco via teclado
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  }, { once: true });
});
