function toggleLanguage() {
  const enTexts = document.querySelectorAll('.en');
  const arTexts = document.querySelectorAll('.ar');
  const isArabic = arTexts[0].classList.contains('hidden') === false;

  enTexts.forEach(el => el.classList.toggle('hidden', !isArabic));
  arTexts.forEach(el => el.classList.toggle('hidden', isArabic));

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
  });
}

window.onscroll = function () {
  const btn = document.getElementById('toTopBtn');
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
// Scroll animation for sections
document.querySelectorAll('section').forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    section.classList.add('visible');
  }
});


function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('section').forEach(section => {
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 100) {
    section.classList.add('visible');
  }
});
});
function switchLanguage(lang) {
  const arText = document.querySelector('.project-card p');
  const arTitle = document.querySelector('.project-card h3');
  const arLink = document.querySelector('.project-card a');

  if (lang === 'en') {
    arTitle.textContent = "Codveda ML Task 1 - Data Preprocessing";
    arText.textContent = "This project uses Jupyter Notebook for data preprocessing using Python libraries. It includes data cleaning, handling missing values, and encoding.";
    arLink.textContent = "View project on GitHub";
  } else {
    arTitle.textContent = "Codveda ML Task 1 - Data Preprocessing";
    arText.textContent = "لتحليل البيانات المسبقة باستخدام مكتبات البايثون. مشروع يستخدم Jupyter Notebook. يتضمن خطوات تنظيف البيانات، التعامل مع القيم المفقودة، وتحويل البيانات.";
    arLink.textContent = "شاهد المشروع على GitHub";
  }
}
  // عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('toggleBtn');

  // استرجاع الوضع المحفوظ من localStorage
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    body.classList.add('dark-mode');
  }

  // عند الضغط على زر التبديل
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // حفظ الوضع الحالي
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  });
});
