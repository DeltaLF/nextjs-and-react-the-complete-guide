import Link from "next/link";
import { useRouter } from "next/router";
function ClientsPage() {
  const router = useRouter();
  function loadProjecthandler() {
    // load data
    router.push("/clients/jake/projectB");
  }
  return (
    <div>
      Client page
      <ul>
        <li>
          <Link href="/clients/Finn"> Finn</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]/[clientprojectid]",
              query: { id: "Jake", clientprojectid: "projectA" },
            }}
          >
            Jake
          </Link>
          <button onClick={loadProjecthandler}>Load Project B</button>
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
