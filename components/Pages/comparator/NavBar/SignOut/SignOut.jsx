import Link from "next/link";
import { Leave } from "components/Icons";
import { useInfoUser } from "hooks/useInfoUser";
import { GET } from "services/fetching";
import { useIsLogin } from "contexts/IsLoginContext/useIsLogin";
import { useRouter } from "next/router";
import useText from "contexts/TextContext/useText";

const SignOut = ({ closeMenu }) => {

  const { user_menu_language } = useText()
  const { userData } = useInfoUser();
  const { setIsLoggedOut } = useIsLogin();
  const router = useRouter();

  async function signOut() {
    try {
      const token = userData["token"];
      const res = await GET(token, "/user/logout");
      if (res.ok) {
        window.localStorage.removeItem("userDataEva");
        closeMenu();
        setIsLoggedOut(true);
        const currentPath = router.pathname;
        if (currentPath === "/comparison-results") {
          router.push("/comparator");
        }
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
