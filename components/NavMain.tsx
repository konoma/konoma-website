import Link from "next/link";
import LinkButton from "@components/base/LinkButton";

function NavMain({}) {
  return (
    <>
      <nav>
        <div>Konoma</div>
        <div>
          <Link href="">
            <a>Label</a>
            <LinkButton url={"/"} label={"Test"} classNames="uppercase" />
          </Link>
        </div>
      </nav>
    </>
  );
}
