document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-list-link');
  const footerNavLinks = document.querySelectorAll('.copyright-link');
  const parts = window.location.pathname
    .split('/')
    .filter(s => s && s.length > 0);

  let currentPath;
  if (parts.length == 0) {
    currentPath = 'index.html';
  } else {
    currentPath = parts[parts.length - 1];
  }

  navLinks.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('active');
    }
  });

  footerNavLinks.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('active');
    }
  });

  // if (!document.querySelector('.nav-link.active')) {
  //   navLinks[0].classList.add('active');
  // }
});
