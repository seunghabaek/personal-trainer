import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyJson } from "../components/surveyJson";
import { useCallback, useEffect } from "react";
// import { dbService } from "../firebase";

StylesManager.applyTheme("defaultV2");

export const SurveyForm = () => {
  const userSurvey = new Model(surveyJson);
  // const alertResults = useCallback((sender: { data: any; deps: any }) => {
  //   const results = JSON.stringify(sender.data);
  //   console.log(results);
  // });

  // useEffect(() => {
  //   const bucket = dbService.collection("login-test-collection");
  //   bucket.doc("user-test").set({ properties: { results } });
  // });
  // userSurvey.onComplete.add(alertResults);
  return <Survey model={userSurvey} />;
};
