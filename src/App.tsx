import { useState } from "react";
import { AppRouter } from "./components/Router";
import { authService } from "./fbase";

function App() {
  console.log(authService);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} personal-trainer</footer>
    </>
  );
}

export default App;
