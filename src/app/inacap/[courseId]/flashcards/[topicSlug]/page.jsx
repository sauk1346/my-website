import { redirect } from 'next/navigation';

export default async function TopicIndexPage({ params }) {
  const { courseId } = await params;
  redirect(`/inacap/${courseId}`);
}
