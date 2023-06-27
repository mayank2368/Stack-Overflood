const questions = [
  {
    id: 1,
    title: "How to use React Hooks?",
    body: "I'm having trouble understanding how to use React hooks like useState and useEffect. Can someone provide some examples?",
    author: "JohnDoe",
  },
  {
    id: 2,
    title: "What are the best practices for responsive web design?",
    body: "I'm looking for tips and best practices for creating responsive web designs that work well across different devices and screen sizes.",
    author: "JaneSmith",
  },
];

const answers = [
  {
    id: 1,
    questionId: 1,
    body: "Here's an example of how to use useState:\n\nconst [count, setCount] = useState(0);\n\nAnd here's an example of how to use useEffect:\n\nuseEffect(() => {\n  // code here\n}, []);",
    author: "ReactGuru",
  },
  {
    id: 2,
    questionId: 2,
    body: "Some best practices for responsive web design include using CSS media queries, designing with a mobile-first approach, and testing on multiple devices and screen sizes.",
    author: "DesignExpert",
  },
];

function postQuestion(question) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newQuestion = {
        id: questions.length + 1,
        ...question,
        author: "CurrentUser",
      };
      questions.push(newQuestion);
      resolve(newQuestion);
    }, 500);
  });
}

const questionService = {
  postQuestion,
};
export default questionService;
