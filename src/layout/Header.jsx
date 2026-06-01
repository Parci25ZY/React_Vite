import './Header.css';

export function Header() {
  return (
    <header className="header" role="banner">
      <a href="#" className="logo" translate="no" aria-label="NØVA — Inicio">
        <span className="logo-mark">N</span>
        <span className="logo-text">NØVA</span>
      </a>

      <nav aria-label="Navegación principal">
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#formulario" className="nav-cta">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
