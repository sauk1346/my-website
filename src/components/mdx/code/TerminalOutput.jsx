"use client";
import React from "react";
import styles from "./TerminalOutput.module.css";

export function TerminalOutput({ children, withBackground = false, className = "" }) {
  const terminalClass = withBackground 
    ? `${styles.terminal} ${styles.terminalWithBg}` 
    : styles.terminal;
    
  return (
    <pre className={`${terminalClass} ${className}`}>
      {children}
    </pre>
  );
}