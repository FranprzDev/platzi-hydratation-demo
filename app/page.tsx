function getToken() { return crypto.randomUUID() }

export default function Home() {
  const token = getToken()

  return (
    <main className="demo-page">
      <section className="demo-card">
        <h1>Demo de hydration mismatch</h1>
        <p>Token generado: {token}</p>
      </section>
    </main>
  );
}
