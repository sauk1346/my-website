import { notFound } from 'next/navigation';
import { getDeckByTopicAndNumber, getCardsByDeckId, getTopicsByCourseId } from '@/lib/flashcards';
import { getAllCourseIds } from '@/utils/courseUtils';
import { renderMdxCards } from '@/lib/renderMdxCards';
import FlashcardStudy from '@/components/features/flashcards/FlashcardStudy';

export async function generateStaticParams() {
  const params = [];
  const courseIds = getAllCourseIds();
  for (const courseId of courseIds) {
    const topics = getTopicsByCourseId(courseId);
    for (const topic of topics) {
      for (const deck of topic.decks) {
        params.push({
          courseId,
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

export default async function InacapStudyPage({ params }) {
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
