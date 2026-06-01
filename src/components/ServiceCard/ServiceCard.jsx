import './ServiceCard.css';

export function ServiceCard({ icon, name, description, featured = false }) {
  return (
    <article className={`service-card ${featured ? 'service-card--featured' : ''}`}>
      {/* Ícono del servicio */}
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>

      {/* Nombre del servicio */}
      <h3 className="service-name">{name}</h3>

      {/* Descripción del servicio */}
      <p className="service-desc">{description}</p>
    </article>
  );
}
