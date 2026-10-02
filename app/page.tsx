"use client"

import { useEffect } from "react";
import { useState } from "react";

function getToken() { return crypto.randomUUID() }

export default function Home() {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    setToken(getToken())
  }, [])

  return (
    <main className="demo-page">
      <section className="demo-card">
        <h1>Demo de hydration mismatch</h1>
        <p>Token generado: {token}</p>
      </section>
    </main>
  );
}
