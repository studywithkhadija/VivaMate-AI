"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    setAnswer("Thinking... 🤖");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await response.json();

      setAnswer(data.answer || "No answer received.");
    } catch (error) {
      setAnswer("Error connecting to AI.");
    }
  };

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1>🧠 VivaMate AI</h1>

      <p>Your AI-powered study companion.</p>

      <textarea
        rows={6}
        placeholder="Ask any study question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleAsk}
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <strong>Response:</strong>
        <p>{answer}</p>
      </div>
    </main>
  );
}
