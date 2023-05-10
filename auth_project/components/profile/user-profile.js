// import { useRouter } from "next/router";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
// import { useSession } from "next-auth/react";

function UserProfile() {
  // this logic can also be implemented in ProfilePage
  // Redirect away if NOT auth
  // const { data, status } = useSession();
  // const router = useRouter();
  // console.log(data, status);

  // if (status === "loading") {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  // if (status !== "authenticated") router.push("/auth");
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
