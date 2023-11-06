import Link from "next/link";
import Button from "components/UI/Button/Button";
import { useMediaQuery } from "react-responsive";
import useText from "contexts/TextContext/useText";

const LoginButton = () => {

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { navbar_out_session_text } = useText()

  return (
    <Link href={"/login"}>
      <Button height={isDesktop ? 43 : 40} style={{ fontSize: "16px" }}>
        {navbar_out_session_text.button_text[isDesktop ? 0 : 1]}
      </Button>
    </Link>
  );
};

export default LoginButton;
