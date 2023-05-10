import AuthForm from "../../components/auth/auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
  const { data, status } = useSession();
  const route = useRouter();
  if (status === "loading") {
    return <p>Loading....</p>;
  }
  if (status === "authenticated") {
    route.push("/");
  }
  return <AuthForm />;
}

export default AuthPage;
