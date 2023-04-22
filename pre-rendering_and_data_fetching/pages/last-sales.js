import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function LastSlaesPage(props) {
  //   const [todo, setTodo] = useState();
  //   const [isLoading, setIsloading] = useState(false);
  let { todo } = props;
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );
  todo = data;
  //   useEffect(() => {
  //     setIsloading(true);
  //     fetch( "https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setTodo(json);
  //         setIsloading(false);
  //       });
  //   }, []);
  if (error) {
    return <div>fail to fetch</div>;
  }
  if (!todo) {
    return <div>Loading....</div>;
  }

  return (
    <ul>
      {todo ? (
        <>
          <h1> {todo.title}</h1>
          {todo.userId}
        </>
      ) : (
        <h1>no data yet</h1>
      )}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      return {
        props: {
          todo: json,
        },
        revalidate: 10,
      };
    });
}

export default LastSlaesPage;
