'use client';

import { useState } from 'react';

export default function AgentPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);
    const res = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data);
    setLoading(false);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Ask the Agent</h1>
      <form onSubmit={ask} style={{ display: 'flex', gap: 8 }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question"
          style={{ flex: 1 }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      {answer && (
        <ol style={{ marginTop: 16 }}>
          {answer.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
