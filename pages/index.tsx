import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="mx-auto text-center">
          <Image alt="Enkya" height={144} width={144} src="/profile.png" className="rounded-full filter grayscale" />
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-beige-100">Enkya</h1>
          <p className="text-gray-600 dark:text-beige-400">CS/SE | Philosphy | Art | Lifestyle </p>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 mt-8 text-black dark:text-beige-100">Featured Posts</h3>
        <BlogPostCard
          title="Understanding CSS Flexbox"
          slug="understanding-css-flexbox"
          gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          publishedAt="2018-10-19"
          summary="Flexbox is a box model specification defined by w3.org. It is also one of the fundamental skills needed to design web User Interface Experiences from scratch. In this tutorial, we take a deep dive on how to use it."
        />
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-beige-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-beige-200 transition-all h-6">
            Read all posts
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
