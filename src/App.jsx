import { Feather, Sparkles, Wind } from 'lucide-react'

const messages = [
  {
    title: 'Escuchá el aire',
    text: 'Cuando el viento cambia, no siempre viene a moverlo todo: a veces solo viene a mostrarte por dónde respirar mejor.',
  },
  {
    title: 'Volvé al centro',
    text: 'La calma no es ausencia de movimiento. Es la raíz interna que no se pierde aunque afuera giren las hojas.',
  },
  {
    title: 'Abrí camino',
    text: 'Hay puertas que no se empujan: se abren cuando tu energía deja de negociar con lo que ya terminó.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow"><Wind size={18} /> Oráculo poético del viento</p>
          <h1>Wayra Laura</h1>
          <p className="hero__subtitle">
            Una experiencia intuitiva para recibir mensajes simbólicos, respirar profundo y volver a escuchar la voz sutil de lo invisible.
          </p>
          <div className="hero__actions">
            <a href="#mensajes" className="button button--primary">Ver mensajes</a>
            <a href="#ritual" className="button button--ghost">Ritual breve</a>
          </div>
        </div>
        <div className="orb" aria-hidden="true">
          <span className="orb__moon">☾</span>
          <span className="orb__wind">〰</span>
        </div>
      </section>

      <section id="mensajes" className="cards" aria-label="Mensajes del viento">
        {messages.map((message) => (
          <article className="card" key={message.title}>
            <Sparkles size={22} />
            <h2>{message.title}</h2>
            <p>{message.text}</p>
          </article>
        ))}
      </section>

      <section id="ritual" className="ritual">
        <div>
          <p className="eyebrow"><Feather size={18} /> Práctica sugerida</p>
          <h2>Ritual de un minuto</h2>
        </div>
        <ol>
          <li>Respirá tres veces llevando la atención al pecho.</li>
          <li>Preguntá internamente: “¿Qué necesito escuchar hoy?”.</li>
          <li>Elegí una frase y dejá que trabaje en vos durante el día.</li>
        </ol>
      </section>
    </main>
  )
}

export default App
