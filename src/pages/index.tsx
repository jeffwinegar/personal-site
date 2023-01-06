import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery([
    "example.hello",
    { text: "from tRPC" },
  ]);

  return (
    <>
      <div>{data ? <p>{data.greeting}</p> : <p>Loading..</p>}</div>

      <h1>Hey, I&rsquo;m Jeff Winegar.</h1>

      <p>
        I&rsquo;m a Frontend JavaScript Developer based out of Los Angeles.
        Originally a graphic designer for 10 years, I transitioned into web
        development and have been building websites for the past 10 years. When
        not writing code I am also an avid bike commuter; a photographer; and a
        maker. I also really enjoy music and watching a good movie.
      </p>

      <p>
        I work in HTML, CSS, and JavaScript. Though always exploring new
        technologies, my focus right now is on React.js, Gatsby, Next.js,
        GraphQL, Node, and Express. Take a look at a few of my public projects:
      </p>

      <ol>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
      </ol>

      <p>
        I am currently a Senior Web Developer at Wunderman Thompson where I do
        hands-on development and lead teams working for clients including
        Hyundai, Genesis, Shell, Pennzoil, Quaker State, Hulu, CareCredit, SCAN,
        and The University of California, Irvine in projects that span from
        micro-sites, landing pages, and site components to responsive dynamic
        data-driven emails and animated banner ads.
      </p>

      <p>
        If you&rsquo;d like to see more of my contributions, take a look on my
        GitHub profile. You can also see my work history on LinkedIn, or get in
        touch with me directly at hello@jeffwinegar.com.
      </p>

      <p>👋 Thanks for visiting.</p>

      <div>
        <h3>This stack uses:</h3>
        <ul>
          <li>
            <a href="https://nextjs.org" target="_blank" rel="noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://trpc.io" target="_blank" rel="noreferrer">
              tRPC
            </a>
          </li>
          <li>
            <a
              href="https://typescriptlang.org"
              target="_blank"
              rel="noreferrer"
            >
              TypeScript
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
