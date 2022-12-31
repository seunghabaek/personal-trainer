import { Header } from "./layout/header";
import { Footer } from "./layout/Footer";
import { NavBar } from "./layout/NavBar";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <NavBar />
        <div>{props.children}</div>
      </main>
      <Footer />
    </>
  );
};
