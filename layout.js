/* =========================================================
   WINDSOR — LAYOUT CENTRALIZADO
   Header y footer únicos para todas las páginas.

   USO en cada página:
     <body>
       <div class="preloader">...</div>
       <div id="site-header"></div>
       <main>...</main>
       <div id="site-footer"></div>
       <script src="layout.js"></script>
       <script src="script.js"></script>
     </body>

   layout.js se inyecta de forma síncrona al final del <body>,
   por lo que script.js (que se ejecuta después) ya encuentra
   el header y el footer en el DOM. No uses defer ni async.
========================================================= */

(function () {
  const headerHTML = `
<header class="header">
<a class="logo" href="index.html">
<img alt="Windsor" class="logo-icon" src="assets/favicon.png">
<span class="logo-name">WINDSOR</span>
</a>
<nav class="desktop-nav">
<ul class="nav-list">
<li><a href="index.html">Inicio</a></li>
<li class="dropdown">
<a href="metodologia.html">Sobre</a>
<ul class="submenu">
<li><a href="metodologia.html">Metodología</a></li>
</ul>
</li>
<li class="dropdown">
<a href="windsor-one.html">Servicios</a>
<ul class="submenu">
<li><a href="windsor-one.html">Windsor One</a></li>
<li><a href="BeQueer.html">BeQueer · piloto</a></li>
</ul>
</li>
<li><a href="contacto.html">Contacto</a></li>
</ul>
</nav>
<div class="header-actions">
<a class="header-button" href="contacto.html">
Hablemos
<span aria-hidden="true" class="arrow-icon">
<svg fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</span>
</a>
</div>
<button aria-expanded="false" aria-label="Abrir menú" class="menu-button"><span></span><span></span></button>
</header>
<div class="mobile-menu">
<div class="mobile-menu-inner">
<div class="mobile-menu-label">NAVEGACIÓN</div>
<a href="index.html">Inicio</a>
<div class="mobile-group-title">Sobre</div>
<a href="metodologia.html">Metodología</a>
<div class="mobile-group-title">Servicios</div>
<a href="windsor-one.html">Windsor One</a>
<a href="BeQueer.html">BeQueer · piloto</a>
<div class="mobile-group-title">Contacto</div>
<a href="contacto.html">Contacto</a>
</div>
</div>
  `;

  const footerHTML = `
<footer class="footer">
<div class="footer-logo">
<img alt="Windsor" src="assets/favicon.png" style="width:34px; height:34px; display:block;">
<span>WINDSOR</span>
</div>
<div class="footer-groups">
<div class="footer-group">
<h4>Sobre</h4>
<a href="metodologia.html">Metodología</a>
</div>
<div class="footer-group">
<h4>Servicios</h4>
<a href="windsor-one.html">Windsor One</a>
<a href="BeQueer.html">BeQueer · piloto</a>
</div>
<div class="footer-group">
<h4>Contacto</h4>
<a href="contacto.html">Contáctanos</a>
</div>
</div>
<div class="footer-tagline">Precisión aplicada.</div>
</footer>
  `;

  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');

  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // Marcar enlace activo según la URL actual
  const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-list a, .submenu a, .mobile-menu a, .footer-group a').forEach(function (link) {
    const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href && href === currentPath) link.classList.add('active');
  });
})();
