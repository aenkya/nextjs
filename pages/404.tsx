import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Enkya">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <p className="tracking-tight mb-4 text-black dark:text-beige-100">
          It seems you&apos;ve found a page that doesn&apos;t exist.
          <br></br>
          <br></br>
          We&apos;ll try to keep that in mind for the next update.
        </p>
        {/* <p className="text-gray-600 dark:text-gray-400 mb-8">
          
        </p> */}
        <Link href="/" className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-beige-100">
            Return Home
        </Link>
      </div>
    </Container>
  );
}
