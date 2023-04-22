import Link from "next/link";
import path from "path";
import fs from "fs/promises";

function Home(props) {
  const { products } = props;
  console.log(this);
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log("console log for checking re-validate", Math.random(), context);
  if (!data) {
    return {
      redirect: {
        destination: "/no-data-route",
      },
    };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 3, // should be regenerated after every 10 secs
    notFound: false, // true to render 404 (after data fetching failed)
  };
}

export default Home;
