"use client";
import React from "react";
import styles from "./TerminalOutput.module.css";

export function TerminalOutput({ children, withBg = false, className = "" }) {
  const terminalClass = withBg
    ? styles.terminalWithBg
    : styles.terminal;

  return (
    <pre className={`${terminalClass} ${className}`}>
      {children}
    </pre>
  );
}