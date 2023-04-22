import path from "path";
import fs from "fs/promises";
function ProductDetailPage(props) {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <p>Loading...</p>; // for fallback true
  }
  const product = loadedProduct[0];
  console.log("prod", product);
  if (!product) {
    return <div>no product found</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticPaths() {
  // tell getStaticProps what dynamical route are possible (valid)
  const data = await getData();
  const { products } = data;
  const ids = products.map((oneData) => oneData.id);
  const paths = ids.map((id) => {
    return {
      params: {
        pid: id,
      },
    };
  });

  return {
    paths: paths,
    // paths: [
    //   {
    //     params: {
    //       pid: "p1",
    //     },
    //   },
    //   //   {
    //   //     params: {
    //   //       pid: "p2",
    //   //     },
    //   //   },
    //   //   {
    //   //     params: {
    //   //       pid: "p3",
    //   //     },
    //   //   },
    // ],
    fallback: false, // true and only pre-generated some page (not all pages need to be generated while building)
    // or fallback:'blocking' // nextjs wait for page be fully generated
  };
}

export async function getStaticProps(context) {
  // we need to know the route
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((oneData) => {
    return oneData.id === productId;
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export default ProductDetailPage;
