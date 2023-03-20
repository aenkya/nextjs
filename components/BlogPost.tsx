import Link from 'next/link';

import type { Blog } from 'contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  return (
    (<Link href={`/blog/${slug}`} className="w-full">

      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-700 md:text-xl dark:text-beige-500">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-beige-100">{summary}</p>
      </div>

    </Link>)
  );
}
