import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "../routes/Auth";
import { SurveyForm } from "../routes/SurveyForm";
import { Chest } from "./body/Chest";
import { Back } from "./body/Back";
import { Abs } from "./body/Abs";
import { Legs } from "./body/Legs";
import { Shoulder } from "./body/Shoulder";
import { Arms } from "./body/Arms";
import { Workout } from "../routes/Workout";
import { Status } from "../routes/Status";
import { Management } from "../routes/Management";

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
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/chest" element={<Chest />} />
        <Route path="/workout/back" element={<Back />} />
        <Route path="/workout/abs" element={<Abs />} />
        <Route path="/workout/legs" element={<Legs />} />
        <Route path="/workout/shoulder" element={<Shoulder />} />
        <Route path="/workout/arms" element={<Arms />} />
        <Route path="/status" element={<Status />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </BrowserRouter>
  );
};
