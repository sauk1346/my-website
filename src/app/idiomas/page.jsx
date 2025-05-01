import React from 'react';
import { Card } from "@/components/Card";
import homeStyles from '@/styles/Home.module.css';

export default function Idiomas() {
  return (
    <div className={homeStyles.mainContainer}>
      <h1 className={homeStyles.title}>Idiomas</h1>
      <div className={homeStyles.cardContainer}>
        <Card
          title="Alemán"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/de.svg"
          link='idiomas/aleman'
        />
        <Card
          title="Coreano"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/kr.svg"
          link='idiomas/coreano'
        />
        <Card
          title="Chino Mandarín"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/cn.svg"
          link='idiomas/chino'
        />
        <Card
          title="Inglés"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/us.svg"
          link='idiomas/ingles'
        />
        <Card
          title="Japonés"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/jp.svg"
          link='idiomas/japones'
        />
        <Card
          title="Ruso"
          description="Apuntes"
          image="https://kapowaz.github.io/square-flags/flags/ru.svg"
          link='idiomas/ruso'
        />
      </div>
    </div>
  );
}