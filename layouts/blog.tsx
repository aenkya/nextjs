import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – Enkya`}
      description={post.summary}
      image={`https://enkya.org${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-beige-100">{post.title}</h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image alt="Enkya" height={40} width={40} src="/profile.png" className="rounded-full" />
            <div>
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">Enkya</p>
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">{post.readingTime.text}</p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">{children}</div>

        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a href="https://twitter.com/aenkya" target="_blank" rel="noopener noreferrer">
            {'Share feedback on Twitter'}
          </a>
        </div> */}
      </article>
    </Container>
  );
}
