import { useState } from 'react'
import { fetchQuote } from '../api/quotes'

function QuotePanel() {
  const [quote, setQuote] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const loadQuote = async () => {
    setStatus('loading')
    setError('')
    try {
      const text = await fetchQuote()
      setQuote(text)
      setStatus('success')
    } catch (err) {
      setError('API mock başarısız oldu')
      setStatus('error')
    }
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <p className="eyebrow">API testi + mock</p>
          <h2>Mesaj servisi</h2>
        </div>
        <span className="pill neutral">fetch + jest.fn</span>
      </div>

      <p className="lede">
        `fetchQuote` fonksiyonunu test etmek için API çağrısını mocklayın.
        Bileşen yalnızca sonucu gösteriyor.
      </p>

      <div className="stack">
        <button type="button" onClick={loadQuote} disabled={status === 'loading'}>
          Mesajı getir
        </button>

        {status === 'loading' && (
          <p data-testid="status" className="muted">
            Yükleniyor...
          </p>
        )}
        {quote && (
          <blockquote data-testid="quote" className="quote">
            {quote}
          </blockquote>
        )}
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default QuotePanel
