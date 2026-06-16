import { ChevronDown, Heart, Menu, Sparkles, Wind } from 'lucide-react'

const navItems = ['Inicio', 'Sobre mí', 'Mi enfoque', 'Servicios', 'Talleres y cursos', 'Testimonios', 'Contacto']

const services = [
  'Sesiones individuales',
  'Acompañamiento energético',
  'Procesos de autoconocimiento',
]

const workshops = [
  'Encuentros vivenciales',
  'Prácticas de presencia',
  'Círculos y talleres de transformación',
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Wayra Laura inicio">
          <span className="brand__mark">WL</span>
          <span>Wayra Laura</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Abrir menú"><Menu size={24} /></summary>
          <div className="mobile-nav__panel">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
            ))}
          </div>
        </details>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <p className="kicker"><Sparkles size={16} /> Un espacio para volver a vos</p>
            <h1>Habitarte lo cambia todo</h1>
            <p className="hero-lead">Cuando te habitás, accedés a nuevas posibilidades.</p>
            <p className="hero-text">
              Acompañamiento sensible, espiritual y profundo para reconectar con tu cuerpo, tu energía y esa brújula interna que a veces queda tapada por el ruido de todos los días.
            </p>
            <div className="hero-actions">
              <a className="button button--solid" href="#servicios">Conocer servicios</a>
              <a className="button button--line" href="#contacto">Agendar consulta</a>
            </div>
          </div>

          <div className="portrait-card" aria-label="Imagen conceptual de Wayra Laura">
            <div className="portrait-card__inner">
              <span className="portrait-card__symbol">✦</span>
              <p>Respirar<br />sentir<br />habitar</p>
            </div>
          </div>
        </section>

        <section id="sobre-mí" className="split-section">
          <p className="section-label">Sobre mí</p>
          <div>
            <h2>Una guía amorosa para procesos reales</h2>
            <p>
              Wayra Laura nace como un espacio de escucha, transformación y presencia. La propuesta no es escaparse de la vida cotidiana, sino aprender a mirarla con más conciencia, más raíz y más ternura.
            </p>
          </div>
        </section>

        <section id="mi-enfoque" className="approach-section">
          <div className="section-heading">
            <p className="section-label"><Wind size={15} /> Mi enfoque</p>
            <h2>Espiritualidad simple, profunda y encarnada</h2>
          </div>
          <div className="approach-grid">
            <article>
              <span>01</span>
              <h3>Escucha</h3>
              <p>Primero se baja el volumen externo para reconocer qué está pidiendo lugar adentro.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Presencia</h3>
              <p>El cuerpo no es un detalle: es territorio, oráculo y mapa. Bastante multitasking, la verdad.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Integración</h3>
              <p>Lo sutil se vuelve útil cuando puede acompañarte en decisiones, vínculos y cambios concretos.</p>
            </article>
          </div>
        </section>

        <section id="servicios" className="list-section">
          <div>
            <p className="section-label">Servicios</p>
            <h2>Procesos para volver a tu eje</h2>
          </div>
          <ul>
            {services.map((service) => (
              <li key={service}><Heart size={18} /> {service}</li>
            ))}
          </ul>
        </section>

        <section id="talleres-y-cursos" className="list-section list-section--dark">
          <div>
            <p className="section-label">Talleres y cursos</p>
            <h2>Espacios grupales con alma de ceremonia</h2>
          </div>
          <ul>
            {workshops.map((workshop) => (
              <li key={workshop}><ChevronDown size={18} /> {workshop}</li>
            ))}
          </ul>
        </section>

        <section id="testimonios" className="quote-section">
          <p>“El verdadero cambio no siempre empieza haciendo más. A veces empieza cuando por fin te quedás en vos.”</p>
        </section>

        <section id="contacto" className="contact-section">
          <p className="section-label">Contacto</p>
          <h2>Empecemos por una conversación</h2>
          <a className="button button--solid" href="mailto:hola@wayralaura.com">Escribirme</a>
        </section>
      </main>
    </div>
  )
}

export default App
