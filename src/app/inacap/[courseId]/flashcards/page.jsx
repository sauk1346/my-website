import { redirect } from 'next/navigation';

export default async function FlashcardsIndexPage({ params }) {
  const { courseId } = await params;
  redirect(`/inacap/${courseId}`);
}
