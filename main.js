// main.js — Lógica de interacciones BRIDGE

// ============================
// BLOG: Filtro por categoría
// ============================
function initBlogFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.blog-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ============================
// FAQ: Acordeón
// ============================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Cierra todos
      faqItems.forEach(i => i.classList.remove('open'));
      // Abre el clickeado si estaba cerrado
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ============================
// ADMISIONES: Validación de formulario
// ============================
function initAdmForm() {
  const form = document.getElementById('adm-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Campos requeridos (input, select, textarea)
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const group = field.closest('.form-group');
      if (!group) return;

      let fieldValid = true;

      if (field.type === 'checkbox') {
        fieldValid = field.checked;
      } else if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        fieldValid = emailRegex.test(field.value.trim());
      } else if (field.type === 'number') {
        const val = parseInt(field.value);
        fieldValid = !isNaN(val) && val >= parseInt(field.min) && val <= parseInt(field.max);
      } else {
        fieldValid = field.value.trim() !== '';
      }

      if (!fieldValid) {
        group.classList.add('has-error');
        field.classList.add('invalid');
        isValid = false;
      } else {
        group.classList.remove('has-error');
        field.classList.remove('invalid');
      }
    });

    if (isValid) {
      form.style.opacity = '0.4';
      form.style.pointerEvents = 'none';
      successMsg.classList.add('visible');
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Limpiar errores al escribir
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) {
        group.classList.remove('has-error');
        field.classList.remove('invalid');
      }
    });
  });
}

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded', () => {
  initBlogFilter();
  initFAQ();
  initAdmForm();
});
