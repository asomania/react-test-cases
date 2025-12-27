import './App.css'
import TaskBoard from './components/TaskBoard'
import QuotePanel from './components/QuotePanel'

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React test playground</p>
        <h1>Vitest + Testing Library + happy-dom</h1>
        <p className="lede">
          Bileşen, snapshot, custom hook ve API testlerini aynı küçük uygulama
          üstünde deneyebileceğiniz basit bir altyapı.
        </p>
      </header>

      <section className="grid">
        <TaskBoard />
        <QuotePanel />
      </section>
    </div>
  )
}

export default App
