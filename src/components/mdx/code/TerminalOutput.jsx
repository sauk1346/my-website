"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import styles from "./TerminalOutput.module.css";

const TerminalContext = createContext();

export function TerminalProvider({ children }) {
  const [terminals, setTerminals] = useState({});

  const registerTerminal = (id) => {
    setTerminals((prev) => {
      if (prev[id]) return prev;
      const existingNumbers = Object.values(prev);
      const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
      return { ...prev, [id]: nextNumber };
    });
  };

  return (
    <TerminalContext.Provider value={{ registerTerminal, terminals }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function TerminalRef({ id }) {
  const terminalContext = useContext(TerminalContext);
  const terminalNumber = terminalContext?.terminals[id];

  if (!terminalNumber) {
    return <span className={styles.terminalRefError}>[Salida ?]</span>;
  }

  return (
    <a href={`#${id}`} className={styles.terminalRef}>
      Salida {terminalNumber}
    </a>
  );
}

function renderWithComments(children) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const lines = text.split("\n");

  return lines.map((line, i) => {
    const isLast = i === lines.length - 1;
    const suffix = isLast ? null : "\n";

    if (/^\s*#/.test(line)) {
      return (
        <React.Fragment key={i}>
          <span className={styles.comment}>{line}</span>
          {suffix}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={i}>
        {line}
        {suffix}
      </React.Fragment>
    );
  });
}

export function TerminalOutput({ children, withBg = false, className = "", caption, id, autoNumber = true }) {
  const terminalContext = useContext(TerminalContext);
  const terminalClass = withBg ? styles.terminalWithBg : styles.terminal;

  useEffect(() => {
    if (autoNumber && id && terminalContext) {
      terminalContext.registerTerminal(id);
    }
  }, [id, autoNumber, terminalContext]);

  const terminalNumber = terminalContext?.terminals[id];
  const fullCaption = autoNumber && terminalNumber
    ? `Salida ${terminalNumber}${caption ? `: ${caption}` : ""}`
    : caption;

  if (fullCaption) {
    return (
      <figure id={id} className={styles.figure}>
        <figcaption className={styles.caption}>{fullCaption}</figcaption>
        <pre className={`${terminalClass} ${styles.withCaption} ${className}`}>
          {renderWithComments(children)}
        </pre>
      </figure>
    );
  }

  return (
    <pre id={id} className={`${terminalClass} ${className}`}>
      {renderWithComments(children)}
    </pre>
  );
}
