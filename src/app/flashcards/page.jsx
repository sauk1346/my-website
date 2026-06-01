import Link from 'next/link';
import { getSections, getTopicsBySection } from '@/lib/flashcards';
import { Layers } from 'lucide-react';
import styles from './Flashcards.module.css';

export const metadata = {
  title: 'Flashcards',
};

export default function FlashcardsPage() {
  const sections = getSections();

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Flashcards</h1>
        <p className={styles.subtitle}>Estudia por mazos de 25 cartas</p>
      </div>

      {sections.map(section => {
        const topics = getTopicsBySection(section);
        return (
          <section key={section} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section}</h2>
            {topics.map(topic => (
              <div key={topic.slug} className={styles.topic}>
                <h3 className={styles.topicName}>{topic.name}</h3>
                <div className={styles.decksGrid}>
                  {topic.decks.map(deck => (
                    <Link
                      key={deck.id}
                      href={`/flashcards/${section}/${topic.slug}/${deck.number}`}
                      className={styles.deckCard}
                    >
                      <Layers size={20} className={styles.deckIcon} />
                      <span className={styles.deckLabel}>Mazo {deck.number}</span>
                      <span className={styles.deckCount}>{deck.cardCount} cartas</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </main>
  );
}
