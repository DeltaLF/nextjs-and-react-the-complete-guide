function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  // only executed on the server after the site is deployed
  const { params, req, res } = context;
  return {
    props: {
      username: "max",
    },
  };
}
