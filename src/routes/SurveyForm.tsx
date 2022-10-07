import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../components/surveyJson";

StylesManager.applyTheme("defaultV2");

export const SurveyForm = () => {
  const userSurvey = new Model(surveyJson);
  return <Survey model={userSurvey} />;
};
