export async function fetchQuote() {
  const response = await fetch('https://example.com/api/quote')
  if (!response.ok) {
    throw new Error('Mesaj alınamadı')
  }

  const data = await response.json()
  return data.quote
}
