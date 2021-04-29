import Head from "next/head";
import Logo from "@components/Logo";
import LogoInverted from "@components/LogoInverted";
import LinkButton from "@components/base/LinkButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Konoma</title>
      </Head>

      <main className="mt-20 text-center">
        <LogoInverted />
        <Logo />
      </main>
    </>
  );
}
