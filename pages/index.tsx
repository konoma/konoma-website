import Head from "next/head";
import NavMobile from "@components/NavMobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konoma</title>
      </Head>

      <NavMobile className="lg:hidden" />
    </>
  );
}
