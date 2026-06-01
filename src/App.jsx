import { Header } from './layout/Header';
import { ContactForm } from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        {/* ── Hero — Full-width cinematic intro ── */}
        <section className="hero" id="inicio" aria-labelledby="hero-heading">
          <div className="hero-content">
            <span className="hero-eyebrow">Disponible para proyectos</span>

            <h1 id="hero-heading" className="hero-title">
              Creamos experiencias
              <br />
              <span className="accent">digitales únicas.</span>
            </h1>

            <p className="hero-description">
              Somos un estudio de diseño y desarrollo que transforma ideas
              ambiciosas en productos digitales memorables. Sin ruido, solo
              resultados.
            </p>

            <div className="hero-actions">
              <a href="#formulario" className="btn-primary">
                <span>Iniciar Proyecto</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#servicios" className="btn-ghost">Ver Servicios</a>
            </div>

            <div className="hero-stats" aria-label="Estadísticas de la empresa">
              <div className="stat">
                <span className="stat-number">120+</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfacción</span>
              </div>
              <div className="stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Respuesta</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services — Capability showcase ── */}
        <section className="services" id="servicios" aria-labelledby="services-heading">
          <header className="section-header">
            <span className="section-eyebrow">Lo que hacemos</span>
            <h2 id="services-heading" className="section-title">
              Servicios que <span className="accent">impulsan</span> tu marca
            </h2>
          </header>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="service-name">Diseño UI/UX</h3>
              <p className="service-desc">
                Interfaces que combinan estética y funcionalidad. Cada píxel
                tiene un propósito.
              </p>
            </article>

            <article className="service-card service-card--featured">
              <div className="service-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="service-name">Desarrollo Web</h3>
              <p className="service-desc">
                Código limpio, rendimiento excepcional. React, Node y
                arquitectura escalable.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="service-name">Estrategia Digital</h3>
              <p className="service-desc">
                Planificación que conecta objetivos de negocio con soluciones
                tecnológicas reales.
              </p>
            </article>
          </div>
        </section>

        {/* ── Contact — Form section at bottom ── */}
        <section className="contact" id="formulario" aria-labelledby="contact-heading">
          <div className="contact-grid">
            <article className="contact-info">
              <span className="section-eyebrow">Contacto</span>
              <h2 id="contact-heading" className="section-title">
                ¿Listo para dar el <span className="accent">siguiente paso</span>?
              </h2>
              <p className="contact-description">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24
                horas. Sin compromiso, sin letra pequeña.
              </p>

              <address className="contact-details">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>parcivaljy@nova.studio</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Remoto — Global</span>
                </div>
              </address>
            </article>

            <aside className="contact-form-wrapper">
              <ContactForm />
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <small>&copy; 2026 NØVA. Todos los derechos reservados.</small>
        <ul className="footer-links" role="list">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#formulario">Contacto</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;