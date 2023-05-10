import UserProfile from "../components/profile/user-profile";
import { getSession } from "next-auth/react";

function ProfilePage({ session }) {
  return <UserProfile />;
}

export default ProfilePage;

export async function getServerSideProps(context) {
  const data = await getSession({ req: context.req });

  if (!data) {
    return {
      redirect: {
        //notFound:false,
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: data,
    },
  };
}
