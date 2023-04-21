import Link from "next/link";

function Home() {
  return (
    <div>
      home
      <ul>
        <li>
          {" "}
          <Link href="/portfolio">Portofolio</Link>{" "}
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
