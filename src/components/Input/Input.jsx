import './Input.css';

export function Input({ label, type = "text", name, value, onChange, error, required = false }) {
  const errorId = `${name}-error`;

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
        className={error ? 'input-error' : ''}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />
      {/* Si existe un error, renderizamos este mensaje */}
      {error && (
        <span id={errorId} className="error-message" role="alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}
