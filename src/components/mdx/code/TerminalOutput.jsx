"use client";
import React from "react";
import styles from "./TerminalOutput.module.css";

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

export function TerminalOutput({ children, withBg = false, className = "" }) {
  const terminalClass = withBg ? styles.terminalWithBg : styles.terminal;

  return (
    <pre className={`${terminalClass} ${className}`}>
      {renderWithComments(children)}
    </pre>
  );
}