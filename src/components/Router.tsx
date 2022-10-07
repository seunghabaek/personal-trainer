import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../routes/Auth";
import { Home } from "../routes/Home";
import { authService } from "../fbase";
import { SurveyForm } from "../routes/SurveyForm";

export interface IApplicationProps {}

export const AppRouter = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<SurveyForm />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
