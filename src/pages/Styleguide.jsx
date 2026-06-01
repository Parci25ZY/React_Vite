const Section = ({ title, children }) => (
  <section style={{ marginBottom: "var(--space-3xl)" }}>
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--color-accent)",
        marginBottom: "var(--space-lg)",
        paddingBottom: "var(--space-sm)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
);

const Label = ({ children }) => (
  <p
    style={{
      fontFamily: "var(--font-body)",
      fontSize: "0.7rem",
      color: "var(--color-muted)",
      marginTop: "var(--space-sm)",
      letterSpacing: "0.04em",
    }}
  >
    {children}
  </p>
);

// ─── Colors ────────────────────────────────────────────────────────────────────

const colors = [
  { name: "--color-ink", value: "#0a0a0f", label: "Ink" },
  { name: "--color-surface", value: "#111118", label: "Surface" },
  { name: "--color-card", value: "#1a1a24", label: "Card" },
  { name: "--color-elevated", value: "#22222e", label: "Elevated" },
  { name: "--color-muted", value: "#8888a0", label: "Muted" },
  { name: "--color-text", value: "#c8c8d8", label: "Text" },
  { name: "--color-light", value: "#eeeef4", label: "Light" },
  { name: "--color-accent", value: "#d4ff2b", label: "Accent" },
  {
    name: "--color-accent-dim",
    value: "rgba(212,255,43,0.12)",
    label: "Accent Dim",
  },
  { name: "--color-error", value: "#ff4d5a", label: "Error" },
  {
    name: "--color-error-bg",
    value: "rgba(255,77,90,0.08)",
    label: "Error BG",
  },
  {
    name: "--color-border",
    value: "rgba(255,255,255,0.06)",
    label: "Border",
  },
];

const ColorPalette = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
      gap: "var(--space-md)",
    }}
  >
    {colors.map(({ name, value, label }) => (
      <div key={name}>
        <div
          style={{
            height: 80,
            borderRadius: "var(--border-radius-sm)",
            background: value,
            border: "1px solid var(--color-border)",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-light)",
            marginTop: "var(--space-sm)",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "var(--color-muted)",
            marginTop: 2,
          }}
        >
          {value}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            color: "var(--color-muted)",
            opacity: 0.7,
          }}
        >
          {name}
        </p>
      </div>
    ))}
  </div>
);

// ─── Typography ────────────────────────────────────────────────────────────────

const typeScales = [
  { label: "Display / 2.75rem", size: "2.75rem", font: "var(--font-display)", weight: 800 },
  { label: "H1 / 2rem", size: "2rem", font: "var(--font-display)", weight: 700 },
  { label: "H2 / 1.5rem", size: "1.5rem", font: "var(--font-display)", weight: 700 },
  { label: "H3 / 1.125rem", size: "1.125rem", font: "var(--font-display)", weight: 600 },
  { label: "Body / 1rem", size: "1rem", font: "var(--font-body)", weight: 400 },
  { label: "Small / 0.875rem", size: "0.875rem", font: "var(--font-body)", weight: 400 },
  { label: "Caption / 0.75rem", size: "0.75rem", font: "var(--font-body)", weight: 400 },
];

const Typography = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
    {/* Font families */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-md)",
        marginBottom: "var(--space-lg)",
      }}
    >
      {[
        { name: "Syne", var: "--font-display", sample: "NØVA Industrial Luxury" },
        { name: "DM Sans", var: "--font-body", sample: "The quick brown fox" },
      ].map(({ name, var: cssVar, sample }) => (
        <div
          key={name}
          style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-lg)",
          }}
        >
          <p
            style={{
              fontFamily: `var(${cssVar})`,
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "var(--color-light)",
              marginBottom: "var(--space-sm)",
            }}
          >
            {sample}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--color-muted)" }}>
            {name} · {cssVar}
          </p>
        </div>
      ))}
    </div>

    {/* Type scale */}
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
      {typeScales.map(({ label, size, font, weight }) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "var(--space-lg)",
            paddingBottom: "var(--space-md)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              color: "var(--color-muted)",
              width: 140,
              flexShrink: 0,
              letterSpacing: "0.06em",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: font,
              fontSize: size,
              fontWeight: weight,
              color: "var(--color-light)",
              lineHeight: 1.2,
            }}
          >
            Creamos experiencias digitales únicas.
          </span>
        </div>
      ))}
    </div>
  </div>
);

// ─── Spacing ───────────────────────────────────────────────────────────────────

const spacingTokens = [
  { name: "--space-xs", value: "0.25rem (4px)" },
  { name: "--space-sm", value: "0.5rem (8px)" },
  { name: "--space-md", value: "1rem (16px)" },
  { name: "--space-lg", value: "1.5rem (24px)" },
  { name: "--space-xl", value: "2.5rem (40px)" },
  { name: "--space-2xl", value: "4rem (64px)" },
  { name: "--space-3xl", value: "6rem (96px)" },
];

const Spacing = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
    {spacingTokens.map(({ name, value }) => {
      const px = parseInt(value);
      return (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "var(--color-muted)",
              width: 110,
              flexShrink: 0,
            }}
          >
            {name}
          </span>
          <div
            style={{
              height: 20,
              width: Math.min(px * 2.5, 400),
              background: "var(--color-accent)",
              opacity: 0.8,
              borderRadius: 3,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "var(--color-muted)",
            }}
          >
            {value}
          </span>
        </div>
      );
    })}
  </div>
);

// ─── Border Radius ─────────────────────────────────────────────────────────────

const radii = [
  { name: "--border-radius-sm", value: "8px" },
  { name: "--border-radius", value: "12px" },
  { name: "--border-radius-lg", value: "20px" },
];

const BorderRadii = () => (
  <div style={{ display: "flex", gap: "var(--space-xl)", flexWrap: "wrap" }}>
    {radii.map(({ name, value }) => (
      <div key={name} style={{ textAlign: "center" }}>
        <div
          style={{
            width: 96,
            height: 96,
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: value,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "var(--color-light)",
            marginTop: "var(--space-sm)",
          }}
        >
          {value}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", color: "var(--color-muted)" }}>
          {name}
        </p>
      </div>
    ))}
  </div>
);

// ─── Shadows & Effects ─────────────────────────────────────────────────────────

const Effects = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
    {/* Shadow */}
    <div>
      <div
        style={{
          width: 200,
          height: 80,
          background: "var(--color-card)",
          borderRadius: "var(--border-radius)",
          boxShadow: "var(--shadow-card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--color-muted)" }}>
          --shadow-card
        </span>
      </div>
      <Label>0 8px 32px rgba(0, 0, 0, 0.4)</Label>
    </div>

    {/* Transitions */}
    <div style={{ display: "flex", gap: "var(--space-lg)", flexWrap: "wrap" }}>
      {[
        { name: "--transition-fast", value: "0.15s cubic-bezier(0.4, 0, 0.2, 1)" },
        { name: "--transition-normal", value: "0.3s cubic-bezier(0.4, 0, 0.2, 1)" },
      ].map(({ name, value }) => (
        <div
          key={name}
          style={{
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md) var(--space-lg)",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-light)" }}>
            {name}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--color-muted)", marginTop: 4 }}>
            {value}
          </p>
        </div>
      ))}
    </div>
  </div>
);

// ─── Buttons ───────────────────────────────────────────────────────────────────

const Buttons = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
    <div style={{ display: "flex", gap: "var(--space-lg)", flexWrap: "wrap", alignItems: "center" }}>
      <button className="btn-primary">
        Iniciar Proyecto
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="btn-ghost">Ver Servicios</button>
    </div>
    <div style={{ display: "flex", gap: "var(--space-lg)", flexWrap: "wrap" }}>
      {[
        { cls: "btn-primary", desc: ".btn-primary — Accent background, dark text, arrow icon" },
        { cls: "btn-ghost", desc: ".btn-ghost — Transparent, border, light text" },
      ].map(({ cls, desc }) => (
        <div key={cls}>
          <code
            style={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              color: "var(--color-accent)",
              background: "var(--color-accent-dim)",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            {cls}
          </code>
          <Label>{desc}</Label>
        </div>
      ))}
    </div>
  </div>
);

// ─── Text Patterns ─────────────────────────────────────────────────────────────

const TextPatterns = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
    <div>
      <span className="section-eyebrow">Disponible para proyectos</span>
      <Label>.section-eyebrow — Uppercase badge, accent background + border, 0.65rem</Label>
    </div>
    <div>
      <h2 className="section-title">Nuestros Servicios</h2>
      <Label>.section-title — Display font, clamp(1.75rem–2.75rem), light color</Label>
    </div>
  </div>
);

// ─── Cards ─────────────────────────────────────────────────────────────────────

const Cards = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-md)" }}>
    {/* Standard card */}
    <div
      style={{
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--border-radius-lg)",
        padding: "var(--space-xl)",
        transition: "var(--transition-normal)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          background: "var(--color-accent-dim)",
          borderRadius: "var(--border-radius-sm)",
          marginBottom: "var(--space-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-light)", marginBottom: "var(--space-sm)" }}>
        Diseño UI/UX
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
        Interfaces centradas en el usuario con estética industrial.
      </p>
      <Label>Service card — standard variant</Label>
    </div>

    {/* Featured card */}
    <div
      style={{
        background: "linear-gradient(135deg, var(--color-card) 0%, rgba(212,255,43,0.04) 100%)",
        border: "1px solid var(--color-border)",
        borderTop: "2px solid var(--color-accent)",
        borderRadius: "var(--border-radius-lg)",
        padding: "var(--space-xl)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          background: "var(--color-accent-dim)",
          borderRadius: "var(--border-radius-sm)",
          marginBottom: "var(--space-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-light)", marginBottom: "var(--space-sm)" }}>
        Desarrollo Web
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
        Aplicaciones rápidas, escalables y con foco en rendimiento.
      </p>
      <Label>Service card — featured variant (accent top border + gradient bg)</Label>
    </div>
  </div>
);

// ─── Form Elements ─────────────────────────────────────────────────────────────

const FormElements = () => (
  <div style={{ maxWidth: 440, display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
    {/* Simulated Input */}
    {[
      { label: "Nombre completo", placeholder: "Ana García", type: "text" },
      { label: "Correo electrónico", placeholder: "ana@ejemplo.com", type: "email" },
    ].map(({ label, placeholder, type }) => (
      <div key={label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
        <label
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
          }}
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius-sm)",
            padding: "0.75rem 1rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--color-text)",
            width: "100%",
            outline: "none",
            transition: "var(--transition-fast)",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "var(--color-accent)";
            e.target.style.boxShadow = "0 0 0 3px var(--color-accent-dim)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "var(--color-border)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
    ))}

    {/* Error state */}
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
      <label
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-error)",
        }}
      >
        Email (estado error)
      </label>
      <input
        type="email"
        defaultValue="correo-invalido"
        style={{
          background: "var(--color-error-bg)",
          border: "1px solid var(--color-error)",
          borderRadius: "var(--border-radius-sm)",
          padding: "0.75rem 1rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          color: "var(--color-text)",
          width: "100%",
          outline: "none",
          boxShadow: "0 0 0 3px rgba(255,77,90,0.08)",
        }}
      />
      <p
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          color: "var(--color-error)",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        Ingresa un correo electrónico válido
      </p>
    </div>
  </div>
);

// ─── Animations ────────────────────────────────────────────────────────────────

const Animations = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
    <style>{`
      @keyframes sg-fadeslide {
        from { opacity: 0; transform: translateY(16px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .sg-anim-demo { animation: sg-fadeslide 0.6s cubic-bezier(0.4,0,0.2,1) both; }
    `}</style>

    {[
      { name: "fadeSlideUp", desc: "Staggered hero entry — opacity 0→1 + translateY 20px→0", delay: "0s" },
      { name: "fadeSlideUp (delayed)", desc: "Same keyframe with 0.1s stagger increments", delay: "0.3s" },
    ].map(({ name, desc, delay }) => (
      <div key={name} style={{ display: "flex", alignItems: "center", gap: "var(--space-xl)" }}>
        <div
          className="sg-anim-demo"
          style={{
            animationDelay: delay,
            background: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--border-radius)",
            padding: "var(--space-md) var(--space-lg)",
            width: 180,
          }}
        >
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--color-accent)" }}>
            {name}
          </span>
        </div>
        <Label>{desc}</Label>
      </div>
    ))}
  </div>
);

// ─── Styleguide Page ───────────────────────────────────────────────────────────

export default function Styleguide() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-ink)",
        color: "var(--color-text)",
        padding: "var(--space-3xl) var(--space-xl)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Page header */}
        <header style={{ marginBottom: "var(--space-3xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", marginBottom: "var(--space-lg)" }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: "var(--color-accent)",
                borderRadius: "var(--border-radius-sm)",
                transform: "rotate(-6deg)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "var(--color-light)",
                letterSpacing: "-0.01em",
              }}
            >
              NØVA
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--color-light)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "var(--space-md)",
            }}
          >
            Design System
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--color-muted)",
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            Todos los tokens visuales, patrones tipográficos y componentes UI que conforman el sistema de diseño{" "}
            <em style={{ color: "var(--color-text)" }}>Industrial Luxury</em>.
          </p>
        </header>

        <Section title="Color Palette">
          <ColorPalette />
        </Section>

        <Section title="Typography">
          <Typography />
        </Section>

        <Section title="Spacing Scale">
          <Spacing />
        </Section>

        <Section title="Border Radius">
          <BorderRadii />
        </Section>

        <Section title="Shadows & Transitions">
          <Effects />
        </Section>

        <Section title="Buttons">
          <Buttons />
        </Section>

        <Section title="Text Patterns">
          <TextPatterns />
        </Section>

        <Section title="Cards">
          <Cards />
        </Section>

        <Section title="Form Elements">
          <FormElements />
        </Section>

        <Section title="Animations">
          <Animations />
        </Section>

        {/* Footer note */}
        <footer
          style={{
            marginTop: "var(--space-3xl)",
            paddingTop: "var(--space-lg)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-sm)",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--color-muted)" }}>
            NØVA Design System · Industrial Luxury
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--color-muted)" }}>
            Syne + DM Sans · CSS Custom Properties
          </p>
        </footer>
      </div>
    </div>
  );
}
