const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.global-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitButton = document.getElementById('submit-button');
  const formStatus = document.getElementById('form-status');
  const showStatus = (message, type) => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.hidden = false;
  };
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '送信中…';
    }
    if (formStatus) {
      formStatus.hidden = true;
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }
    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (response.ok) {
        const submittedCategory = document.getElementById('category')?.value || 'その他';

        // Record a lead only after Formspree confirms successful submission.
        // Never send name, email address, message content, or other PII to Google Analytics.
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            lead_source: 'website_contact_form',
            service_category: submittedCategory
          });
        }

        showStatus('送信しました。お問い合わせありがとうございます。内容を確認のうえご連絡します。', 'success');
        contactForm.reset();
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        const select = document.getElementById('category');
        if (select) {
          if (category === 'business') select.value = '事業者向けAI・IT支援';
          if (category === 'learning') select.value = '学習・技術指導';
          if (category === 'personal') select.value = '個人・ご家庭向けITサポート';
        }
      } else {
        let message = '送信できませんでした。時間をおいて再度お試しいただくか、メールでお問い合わせください。';
        try {
          const data = await response.json();
          if (response.status === 429) {
            message = '短時間に送信が集中しています。少し時間をおいてから再度お試しください。';
          } else if (data && Array.isArray(data.errors) && data.errors.length > 0) {
            message = '入力内容を確認して、もう一度送信してください。';
          }
        } catch (_) {}
        showStatus(message, 'error');
      }
    } catch (_) {
      showStatus('通信エラーで送信できませんでした。ネットワークを確認して再度お試しいただくか、メールでお問い合わせください。', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
      }
    }
  });
}
