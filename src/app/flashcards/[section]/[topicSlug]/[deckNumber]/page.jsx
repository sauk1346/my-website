import { notFound } from 'next/navigation';
import { getDeckByTopicAndNumber, getCardsByDeckId, getSections, getTopicsBySection } from '@/lib/flashcards';
import { renderMdxCards } from '@/lib/renderMdxCards';
import FlashcardStudy from '@/components/features/flashcards/FlashcardStudy';

export async function generateStaticParams() {
  const params = [];
  const sections = getSections();
  for (const section of sections) {
    const topics = getTopicsBySection(section);
    for (const topic of topics) {
      for (const deck of topic.decks) {
        params.push({
          section,
          topicSlug: topic.slug,
          deckNumber: String(deck.number),
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { topicSlug, deckNumber } = await params;
  const result = getDeckByTopicAndNumber(topicSlug, Number(deckNumber));
  if (!result) return {};
  return { title: `${result.topic.name} — Mazo ${deckNumber}` };
}

export default async function StudyPage({ params }) {
  const { topicSlug, deckNumber } = await params;
  const result = getDeckByTopicAndNumber(topicSlug, Number(deckNumber));
  if (!result) notFound();

  const { topic, deck } = result;
  const rawCards = getCardsByDeckId(deck.id);
  if (!rawCards.length) notFound();
  const cards = await renderMdxCards(rawCards);

  return (
    <FlashcardStudy
      cards={cards}
      topicName={topic.name}
      deckNumber={deck.number}
      layout={topic.layout}
    />
  );
}
