export const surveyJson = {
  pages: [
    {
      title: "why are you trying to do exercise?",
      elements: [
        {
          name: "why",
          title: "Your Purpose",
          type: "radiogroup",
          isRequired: true,
          hasOther: false,
          choices: [
            "Better Posture",
            "Lose Weight",
            "Body Profile",
            "Rehabiliation",
          ],
        },
      ],
    },
    {
      title: "How do you like exercise?",
      elements: [
        {
          name: "how",
          title: "Workout Contents",
          type: "radiogroup",
          isRequired: true,
          hasOther: false,
          choices: ["1 on 1", "1 on 2", "1 on Group"],
        },
        {
          name: "how",
          title: "Preference",
          type: "radiogroup",
          isRequired: true,
          hasOther: false,
          choices: ["Academic", "General", "Blindly"],
        },
      ],
    },
    {
      title: "How long do you want to exercise?",
      elements: [
        {
          name: "what",
          title: "Target Period",
          type: "radiogroup",
          isRequired: true,
          hasOther: false,
          choices: [
            "Short term (~3M)",
            "Mid term (3~12M)",
            "Long term (1year~)",
          ],
        },
        {
          type: "text",
          name: "weight",
          title: "Weight",
        },
        {
          type: "text",
          name: "body fat",
          title: "Body Fat",
        },
        {
          type: "text",
          name: "additional info",
          title: "Additional Info",
        },
      ],
    },
    {
      title: "Your favorite Youtube channel",
      elements: [
        {
          name: "why",
          title: "Your favorite youtube channel",
          type: "radiogroup",
          isRequired: false,
          hasOther: false,
          choices: ["피지컬갤러리", "지피티", "지기채널", "권혁TV"],
        },
      ],
    },
  ],
};
