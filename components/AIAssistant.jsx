import React, { useRef, useState } from "react";
import "./AIAssistant.css";

const suggestions = ["How can I automate my home?", "Show me your services", "I want a consultation"];

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! I’m Nova, your smart-home guide. How can I help?" },
  ]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragState = useRef(null);

  const sendMessage = (text = input) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: trimmed },
      { from: "ai", text: "Great question! Our team can design a solution around your space, routine, and budget. Try our services or send an enquiry to get started." },
    ]);
    setInput("");
  };

  const startDrag = (event) => {
    if (event.target.closest("button, input, textarea, a")) return;
    dragState.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const drag = (event) => {
    if (!dragState.current) return;
    setPosition({
      x: dragState.current.originX + event.clientX - dragState.current.startX,
      y: dragState.current.originY + event.clientY - dragState.current.startY,
    });
  };

  const stopDrag = () => {
    dragState.current = null;
  };

  return (
    <aside
      className={`ai-assistant ${open ? "is-open" : ""}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
    >
      {open && (
        <div className="ai-panel">
          <div className="ai-panel-header">
            <div><span className="ai-pulse" /> <strong>Nova AI</strong><small>Online now</small></div>
            <button aria-label="Close AI assistant" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="ai-messages">
            {messages.map((message, index) => (
              <div className={`ai-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</div>
            ))}
          </div>
          <div className="ai-suggestions">
            {suggestions.map((suggestion) => <button key={suggestion} onClick={() => sendMessage(suggestion)}>{suggestion}</button>)}
          </div>
          <form className="ai-form" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input aria-label="Ask Nova AI" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask Nova anything..." />
            <button aria-label="Send message" type="submit">↗</button>
          </form>
        </div>
      )}
      {!open && <span className="ai-hint">Drag me anywhere</span>}
      <button className="ai-launcher" aria-label={open ? "Close Nova AI" : "Open Nova AI"} onClick={() => setOpen((value) => !value)}>
        <span className="ai-spark">✦</span>
        <span><strong>Ask Nova</strong><small>AI assistant</small></span>
        <b>{open ? "×" : "↗"}</b>
      </button>
    </aside>
  );
};

export default AIAssistant;
