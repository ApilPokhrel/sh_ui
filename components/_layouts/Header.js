import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Cabin"
        rel="stylesheet"
        key="google-font-cabin"
      />
    </Head>
  );
}
