import { IsLoginProvider } from "contexts/IsLoginContext/IsLoginProvider";
import Header from "components/UI/NavBar/Header";
import Footer from "components/UI/Footer/Footer";
import TextProvider from "contexts/TextContext/TextProvider";

const Layout = ({ children, content }) => {
  return (
    <TextProvider content={content}>
      <IsLoginProvider>
        <Header sticky="relative" />
      </IsLoginProvider>

      {children}

      <Footer />
    </TextProvider>
  );
};

export default Layout;
