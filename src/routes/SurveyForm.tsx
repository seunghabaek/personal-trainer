import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../components/surveyJson";
import { Route, Routes } from "react-router-dom";
import { Status } from "./Status";

StylesManager.applyTheme("defaultV2");

const onComplete = () => {
  return (
    <Routes>
      <Route path="/" element={<Status />} />
    </Routes>
  );
};

export const SurveyForm = () => {
  const userSurvey = new Model(surveyJson);
  // userSurvey.onAfterRenderSurvey.add(function (userSurvey, options) {
  //   const btn = document.createElement("button");
  //   btn.type = "button";
  //   btn.className = "dialogBox-btn";
  //   btn.innerHTML = "More Info";
  //   const header = options.htmlElement.querySelector("h4");
  //   header.appendChild(btn);
  // });
  // userSurvey.addNavigationItem({
  //   id: "survey_clear_current_page",
  //   title: "Go to your Status",
  //   visibleIndex: 49,
  // });
  console.log(userSurvey.getPlainData());
  return <Survey model={userSurvey} onComplete={onComplete} />;
};
