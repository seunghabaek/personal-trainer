import { useEffect, useState } from "react";
import { AppRouter } from "./components/Router";
import { authService } from "./fbase";
import "./Main.css";

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
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer className="footer">
        &copy; {new Date().getFullYear()} personal-trainer
      </footer>
    </>
  );
}

export default App;
