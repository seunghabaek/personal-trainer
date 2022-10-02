import { useState } from "react";
import { AppRouter } from "./components/Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {/* <h1>personal-trainer</h1> */}

      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
