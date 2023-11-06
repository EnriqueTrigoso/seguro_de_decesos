import Link from "next/link";
import { Leave } from "components/Icons";
import { useRouter } from "next/router";
import { useInfoUser } from "hooks/useInfoUser";
import { GET } from "services/fetching";
import useText from "contexts/TextContext/useText";

const SignOut = () => {

  const { user_menu_language } = useText()
  const { userData } = useInfoUser();
  const route = useRouter();

  async function signOut() {
    try {
      const token = userData["token"];
      const res = await GET(token, "/user/logout");
      if (res.ok) {
        window.localStorage.removeItem("userDataEva");
        route.reload();
      }
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <Link href={""} onClick={signOut}>
      <Leave />
      {user_menu_language.signOut}
    </Link>
  );
};

export default SignOut;
