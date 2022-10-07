export const surveyJson = {
  pages: [
    {
      title: "why do you trying to exercise?",
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
  ],
};
