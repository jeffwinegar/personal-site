import Head from "next/head";
import styles from "./Layout.module.css";

const Layout: React.FC<{
  children?: React.ReactNode;
  title?: string;
}> = ({ children, title = "Jeff Winegar - Frontend Developer" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="Jeff Winegar" />
        <meta property="og:description" content="Frontend Web Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jeffwinegar.com" />
        <meta name="twitter:creator" content="@jeff_winegar" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="Frontend Web Developer" />
        <meta name="theme-color" content="hsl(0, 0%, 100%)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.jeffwinegar.com" />
      </Head>
      <div className={styles.container}>
        <main className={styles.grid}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
