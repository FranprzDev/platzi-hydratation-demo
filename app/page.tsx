export default function Home() {
  const token = Math.random().toFixed(5)

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <section>
        <h1>Demo de hydration mismatch</h1>
        <p>Token generado: {token}</p>
      </section>
    </main>
  );
}
