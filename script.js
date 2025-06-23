document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  // ტოგლის ფუნქცია
  const toggleMenu = () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  // კლიკზე ტოგლი
  burger.addEventListener('click', toggleMenu);

  // სურვილისამებრ: მენიუს ლინკზე დაჭერისას დაიხუროს
  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // სურვილისამებრ: თუ კლიკი მენიუს გარეთაა, დაიხუროს მენიუ
  document.addEventListener('click', (e) => {
    const isClickInside = burger.contains(e.target) || navMenu.contains(e.target);
    if (!isClickInside) {
      burger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
