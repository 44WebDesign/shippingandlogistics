// Blog + article shared behaviour
(function () {
  var toggle = document.getElementById('mobileToggle');
  var menu = document.getElementById('mobileMenu');
  var close = document.getElementById('mobileClose');
  if (toggle && menu) {
    toggle.addEventListener('click', function () { menu.classList.add('open'); });
  }
  if (close && menu) {
    close.addEventListener('click', function () { menu.classList.remove('open'); });
  }
  window.closeMobileMenu = function () { if (menu) menu.classList.remove('open'); };
})();
