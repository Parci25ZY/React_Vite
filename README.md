# NØVA Landing Page — Documentación del Formulario de Contacto

## Índice

1. [Estructura de los componentes](#1-estructura-de-los-componentes)
2. [Cómo funciona el formulario](#2-cómo-funciona-el-formulario)
3. [Validaciones aplicadas](#3-validaciones-aplicadas)
4. [Cómo duplicar o reutilizar los componentes](#4-cómo-duplicar-o-reutilizar-los-componentes)
5. [Cómo agregar un nuevo campo](#5-cómo-agregar-un-nuevo-campo)
6. [Preguntas frecuentes del profesor](#6-preguntas-frecuentes-del-profesor)

---

## 1. Estructura de los componentes

El formulario está dividido en dos archivos dentro de `src/components/`:

```
src/
└── components/
    ├── Input.jsx        ← Componente reutilizable para cada campo del formulario
    ├── Input.css        ← Estilos del input (foco, error, label animado)
    ├── ContactForm.jsx  ← Formulario completo con estado y validaciones
    └── ContactForm.css  ← Estilos del formulario (tarjeta, botón enviar)
```

**¿Por qué están separados?**
`Input.jsx` es un componente reutilizable. Esto significa que se puede usar en cualquier otro formulario del proyecto simplemente importándolo, sin repetir código.

---

## 2. Cómo funciona el formulario

El formulario usa dos estados de React para funcionar:

```jsx
// Guarda lo que el usuario escribe en cada campo
const [formData, setFormData] = useState({
  nombre: '',
  email: '',
  telefono: '',
  asunto: ''
});

// Guarda los mensajes de error de cada campo
const [errors, setErrors] = useState({});
```

**Flujo general:**

```
Usuario escribe  →  handleChange actualiza formData  →  si había error en ese campo, lo borra
Usuario envía    →  handleSubmit llama a validateForm
                        ↓ Si hay errores  →  setErrors muestra los mensajes debajo de cada campo
                        ↓ Si todo es válido  →  se envían los datos y se limpia el formulario
```

---

## 3. Validaciones aplicadas

Las validaciones están dentro de la función `validateForm()` en `ContactForm.jsx`. Se ejecutan solo cuando el usuario presiona el botón "Enviar Mensaje".

### Campo: Nombre Completo

```jsx
if (!formData.nombre.trim()) {
  newErrors.nombre = 'El nombre es obligatorio';
} else if (formData.nombre.trim().length < 2) {
  newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
}
```

| Regla | Ejemplo que falla | Mensaje |
|---|---|---|
| No puede estar vacío | `""` o solo espacios | "El nombre es obligatorio" |
| Mínimo 2 caracteres | `"a"` | "El nombre debe tener al menos 2 caracteres" |

> `.trim()` elimina los espacios al inicio y al final antes de revisar. Así `"  "` se trata como vacío.

---

### Campo: Correo Electrónico

```jsx
if (!formData.email.trim()) {
  newErrors.email = 'El correo es obligatorio';
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  newErrors.email = 'El formato del correo es inválido';
}
```

| Regla | Ejemplo que falla | Mensaje |
|---|---|---|
| No puede estar vacío | `""` | "El correo es obligatorio" |
| Debe tener formato de email | `"hola"` o `"hola@"` | "El formato del correo es inválido" |

**¿Qué hace la expresión regular `/\S+@\S+\.\S+/`?**

- `\S+` → uno o más caracteres que no sean espacio (el nombre del correo)
- `@` → el símbolo arroba literal
- `\S+` → uno o más caracteres (el dominio)
- `\.` → un punto literal
- `\S+` → la extensión (com, net, org, etc.)

Ejemplos válidos: `ana@gmail.com`, `contacto@nova.studio`
Ejemplos inválidos: `anagmail.com`, `ana@`, `ana@gmail`

---

### Campo: Teléfono

```jsx
const soloNumeros = formData.telefono.replace(/[\s\-().+]/g, '');

if (!formData.telefono.trim()) {
  newErrors.telefono = 'El teléfono es obligatorio';
} else if (!/^\d{7,15}$/.test(soloNumeros)) {
  newErrors.telefono = 'Debe contener entre 7 y 15 dígitos';
}
```

| Regla | Ejemplo que falla | Mensaje |
|---|---|---|
| No puede estar vacío | `""` | "El teléfono es obligatorio" |
| Entre 7 y 15 dígitos | `"123"` o `"1234567890123456"` | "Debe contener entre 7 y 15 dígitos" |

**¿Por qué se usa `soloNumeros`?**

Antes de aplicar la expresión regular, se eliminan los caracteres de formato que los usuarios suelen escribir: espacios, guiones `-`, paréntesis `()`, puntos y el símbolo `+`. Así estos formatos todos son válidos:

- `0412-555-1234`
- `+58 412 555 1234`
- `(0412) 555 1234`
- `04125551234`

**¿Qué hace la expresión regular `/^\d{7,15}$/`?**

- `^` → el texto debe empezar aquí (no puede haber nada antes)
- `\d` → solo dígitos del 0 al 9
- `{7,15}` → mínimo 7, máximo 15
- `$` → el texto debe terminar aquí (no puede haber nada después)

---

### Campo: Asunto

```jsx
if (!formData.asunto.trim()) {
  newErrors.asunto = 'El asunto es obligatorio';
} else if (formData.asunto.trim().length < 3) {
  newErrors.asunto = 'El asunto debe tener al menos 3 caracteres';
}
```

| Regla | Ejemplo que falla | Mensaje |
|---|---|---|
| No puede estar vacío | `""` | "El asunto es obligatorio" |
| Mínimo 3 caracteres | `"ok"` | "El asunto debe tener al menos 3 caracteres" |

---

### Limpieza de errores en tiempo real

```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  // Si el campo ya tenía un error, lo borramos mientras el usuario escribe
  if (errors[name]) {
    setErrors({ ...errors, [name]: '' });
  }
};
```

Cuando el usuario comienza a corregir un campo que mostró error, el mensaje rojo desaparece de inmediato. Esto mejora la experiencia porque el usuario recibe retroalimentación positiva mientras escribe.

---

## 4. Cómo duplicar o reutilizar los componentes

### Usar `Input` en otro formulario

Solo importa el componente y pásale sus props:

```jsx
import { Input } from './components/Input';

// Dentro de tu componente:
<Input
  label="Nombre del producto"   // Texto de la etiqueta
  type="text"                   // Tipo de input: text, email, tel, password, etc.
  name="producto"               // Nombre del campo (debe coincidir con el estado)
  value={formData.producto}     // El valor actual del estado
  onChange={handleChange}       // La función que actualiza el estado
  error={errors.producto}       // El mensaje de error (o undefined si no hay)
  required                      // Opcional: marca el campo como obligatorio
/>
```

### Props disponibles en `Input`

| Prop | Tipo | Por defecto | Descripción |
|---|---|---|---|
| `label` | string | — | Texto de la etiqueta visible |
| `type` | string | `"text"` | Tipo HTML del input |
| `name` | string | — | Nombre del campo, conecta label e input |
| `value` | string | — | Valor controlado desde el estado |
| `onChange` | función | — | Función que se llama al escribir |
| `error` | string | — | Mensaje de error a mostrar |
| `required` | boolean | `false` | Marca el campo como requerido |

### Duplicar el formulario completo para otra sección

1. Copia `ContactForm.jsx` y `ContactForm.css` con un nombre nuevo, por ejemplo `NewsletterForm.jsx`
2. Cambia los campos en `useState` según los datos que necesites
3. Ajusta las validaciones en `validateForm()`
4. Importa el nuevo componente donde lo necesites

---

## 5. Cómo agregar un nuevo campo

Ejemplo: agregar un campo "Empresa" al formulario.

**Paso 1 — Agregar al estado inicial en `ContactForm.jsx`:**
```jsx
const [formData, setFormData] = useState({
  nombre: '',
  email: '',
  telefono: '',
  asunto: '',
  empresa: ''   // ← nuevo campo
});
```

**Paso 2 — Agregar su validación en `validateForm()`:**
```jsx
if (!formData.empresa.trim()) {
  newErrors.empresa = 'La empresa es obligatoria';
}
```

**Paso 3 — Agregar al reset después de enviar:**
```jsx
setFormData({ nombre: '', email: '', telefono: '', asunto: '', empresa: '' });
```

**Paso 4 — Agregar el componente `Input` en el JSX:**
```jsx
<Input
  label="Empresa"
  name="empresa"
  value={formData.empresa}
  onChange={handleChange}
  error={errors.empresa}
  required
/>
```

> El `handleChange` ya funciona para cualquier campo nuevo, no necesita modificarse. Esto es gracias al uso de `[name]: value` que lee el nombre del campo dinámicamente.

---

## 6. Preguntas frecuentes del profesor

---

### Pregunta 1: ¿Por qué usas `noValidate` en el formulario si quieres validar los campos?

**Respuesta:**

`noValidate` desactiva la validación automática del navegador. La razón es que cada navegador muestra los mensajes de error de forma diferente y con estilos que no podemos controlar. Al usar `noValidate`, tomamos el control total de cuándo y cómo se muestran los errores, usando nuestros propios mensajes en español y con los estilos del diseño del proyecto. La validación igual ocurre, pero la hacemos nosotros con JavaScript en la función `validateForm()`.

---

### Pregunta 2: ¿Por qué la validación del teléfono crea una variable `soloNumeros` en lugar de validar `formData.telefono` directamente?

**Respuesta:**

Porque los usuarios escriben los teléfonos de muchas formas distintas: con guiones, espacios, paréntesis o el símbolo `+` del código de país. Si validamos `formData.telefono` directamente con `/^\d{7,15}$/`, todos esos formatos fallarían aunque el número sea correcto.

Al crear `soloNumeros` con `.replace(/[\s\-().+]/g, '')`, primero limpiamos esos caracteres de formato y nos quedamos solo con los dígitos. Así podemos contar cuántos números reales tiene el teléfono sin importar cómo lo haya escrito el usuario.

---

### Pregunta 3: ¿Por qué el componente `Input` recibe `error` como prop en lugar de manejar su propio estado de error?

**Respuesta:**

Porque el componente `Input` es un componente presentacional, su única responsabilidad es mostrarse correctamente. La lógica de si algo es un error o no pertenece al `ContactForm`, que es quien conoce todas las reglas de validación.

Si `Input` manejara su propio estado de error, sería difícil validar el formulario completo al presionar "Enviar", porque cada campo estaría aislado y no habría un lugar central donde revisar si todo está correcto antes de enviar. El patrón de pasar `error` como prop permite que `ContactForm` controle todo desde un solo lugar.

---

### Pregunta 4: ¿Qué pasaría si el usuario escribe `"  "` (solo espacios) en el campo Nombre? ¿Lo aceptaría el formulario?

**Respuesta:**

No lo aceptaría, gracias a `.trim()`. El método `.trim()` elimina todos los espacios al inicio y al final de un texto. Entonces `"   ".trim()` devuelve `""`, que es una cadena vacía.

La condición `!formData.nombre.trim()` evalúa si el resultado de quitar los espacios es vacío. Como `!""` es `true`, entraría al bloque del error y mostraría "El nombre es obligatorio". Sin `.trim()`, `"   "` pasaría la validación de vacío porque técnicamente contiene caracteres.

---

### Pregunta 5: ¿Por qué `handleChange` usa el operador spread (`...formData`) en lugar de modificar `formData` directamente?

**Respuesta:**

En React, el estado es inmutable, lo que significa que no debemos modificarlo directamente. Si escribiéramos `formData.nombre = value`, React no detectaría el cambio y el componente no se volvería a renderizar.

El operador spread `{ ...formData, [name]: value }` crea un objeto completamente nuevo copiando todos los campos actuales y sobreescribiendo solo el campo que cambió. Al pasarle ese objeto nuevo a `setFormData`, React detecta que el estado cambió y actualiza la pantalla correctamente.

Por ejemplo, si `formData` es `{ nombre: 'Ana', email: '', telefono: '', asunto: '' }` y el usuario escribe en el email, el resultado sería: `{ nombre: 'Ana', email: 'ana@...', telefono: '', asunto: '' }`, conservando el nombre que ya estaba escrito.
