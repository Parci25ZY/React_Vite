import { useState } from 'react';
import { Input } from '../Input/Input';
import './ContactForm.css';

export function ContactForm() {
  // 1. Estado para los datos del formulario (los 4 campos)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: ''
  });

  // 2. Estado para los errores de validación
  const [errors, setErrors] = useState({});

  // 3. Manejador de cambios universal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Si el campo ya tenía un error, lo borramos mientras el usuario escribe
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let newErrors = {}; // Objeto temporal para guardar errores

    // 1. Validar Nombre (Que no esté vacío y tenga al menos 2 caracteres)
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // 2. Validar Email (Formato correcto usando una Expresión Regular simple)
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo es inválido';
    }

    // 3. Validar Teléfono (Entre 7 y 15 dígitos, acepta espacios, guiones y el símbolo +)
    // Primero eliminamos los caracteres de formato para quedarnos solo con los números
    const soloNumeros = formData.telefono.replace(/[\s\-().+]/g, '');
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{7,15}$/.test(soloNumeros)) {
      newErrors.telefono = 'Debe contener entre 7 y 15 dígitos';
    }

    // 4. Validar Asunto (Que no esté vacío y tenga al menos 3 caracteres)
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio';
    } else if (formData.asunto.trim().length < 3) {
      newErrors.asunto = 'El asunto debe tener al menos 3 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Ejecutamos las validaciones
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores, actualizamos el estado 'errors' para que los Inputs los muestren
      setErrors(validationErrors);
    } else {
      // Si pasa la validación, limpiamos errores y "enviamos"
      setErrors({});
      alert('¡Formulario enviado con éxito!');
      console.log('Datos listos para el backend:', formData);

      // Opcional: Limpiar el formulario después de enviar
      setFormData({ nombre: '', email: '', telefono: '', asunto: '' });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <h2>Hablemos</h2>
        <p className="form-subtitle">
          Cuéntanos sobre tu proyecto y te responderemos en menos de 24h.
        </p>
      </div>

      <fieldset className="form-fields">
        <legend className="sr-only">Datos de contacto</legend>

        <Input
          label="Nombre Completo"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={errors.nombre}
          required
        />

        <Input
          label="Correo Electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <Input
          label="Teléfono"
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          error={errors.telefono}
          required
        />

        <Input
          label="Asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          error={errors.asunto}
          required
        />
      </fieldset>

      <button type="submit" className="submit-btn" id="submit-contact">
        <span>Enviar Mensaje</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </form>
  );
}
