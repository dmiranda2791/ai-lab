import { QuestionsForm } from "../components/QuestionsForm";
import { router } from "expo-router";

export default function QuestionsScreen() {
  const questions = [
    {
      id: 1,
      name: "favoriteMovie",
      text: "What's your favorite movie and why?",
    },
    {
      id: 2,
      name: "newOrClassic",
      text: "Are you in the mood for something new or a classic?",
    },
    {
      id: 3,
      name: "funOrSerious",
      text: "Do you wanna have fun or do you want something serious?",
    },
  ];

  const onSubmit = async (input) => {
    const data = Object.keys(input).map((key) => {
      const question = questions.find((question) => question.name === key);
      return {
        text: question.text,
        answer: input[key],
      };
    });

    const response = await fetch("/suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    router.push({ pathname: "/output", params: json });
  };

  return (
    <QuestionsForm
      onSubmit={onSubmit}
      questions={questions}
      buttonText="Let's go!"
    />
  );
}
