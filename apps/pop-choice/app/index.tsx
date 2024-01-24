import { QuestionsForm } from "../components/QuestionsForm";

export default function QuestionsScreen() {
  const questions = [
    {
      id: 1,
      name: "question1",
      text: "What's your favorite movie and why?",
    },
    {
      id: 2,
      name: "question2",
      text: "Are you in the mood for something new or a classic?",
    },
    {
      id: 3,
      name: "question3",
      text: "Do you wanna have fun or do you want something serious?",
    },
  ];
  return <QuestionsForm questions={questions} buttonText="Let's go!" />;
}
