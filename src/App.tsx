import { useEffect, useState } from "react";
import { AppRouter } from "./components/Router";
import { authService } from "./fbase";
import "./Main.css";
import { Layout } from "./components/Layout";

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <Layout>
        <div>
          {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
        </div>
      </Layout>
    </>
  );
}

export default App;
