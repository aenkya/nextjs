import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Enkya">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-beige-100">About Enkya</h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Email: <a href="mailto:brucebigirwenkya@gmail.com">brucebigirwenkya@gmail.com</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/aenkya">@aenkya</a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/enkya/">Bruce Bigirwenkya</a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>
            Enkya is a passion project by Bruce Bigirwenkya, a software engineer and artist with a passion for creating tools to explore real world problems in a technlogy driven world. Enkya is the short form of his name, Bigirwenkya, which is a Runyoro name meaning &quot;Done by a supernatural being&quot;. The comedic timing of shortening the name to Enkya (meaning a supernatural being) and the prevalent God complex of software engineers is not lost on him.
          </p>
        </div>
      </div>
    </Container>
  );
}
