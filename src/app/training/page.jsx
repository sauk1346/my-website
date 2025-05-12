import React from 'react';
import { Card } from "@/components/Card";
import styles from '@/styles/elearning.module.css';

export default function Training() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>CodeTraining</h1>
        <div className={styles.cardGrid}>
          <Card
            title="HackerRank"
            description="Apuntes"
            image="/logos/hackerrank.png"
            link='training/hackerrank'
          />
          <Card
            title="LeetCode"
            description="Apuntes"
            image="/logos/leetcode.png"
            link='training/leetcode'
          />
        </div>
      </div>
    </div>
  );
}