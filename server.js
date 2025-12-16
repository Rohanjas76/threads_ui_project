const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const posts = [
  {
    community: "r/CollegeLife",
    title: "College life is not what they promised",
    description:
      "Everyone says college will be the best phase of life, but reality hits hard. Deadlines, pressure, self-doubt, and uncertainty slowly replace excitement. You learn more about surviving stress than enjoying freedom, and nobody really prepares you for that."
  },
  {
    community: "r/InternetCulture",
    title: "Why everyone pretends to be happy online",
    description:
      "Social media has turned life into a performance. People post smiles, achievements, and luxury while hiding anxiety, failure, and loneliness. The pressure to look successful is exhausting, and slowly authenticity disappears from the internet."
  },
  {
    community: "r/Students",
    title: "Group projects are unfair by design",
    description:
      "One person takes responsibility, two disappear, and one suddenly shows up at the deadline. Still, everyone gets the same marks. Group projects test patience more than teamwork and reward presence, not contribution."
  },
  {
    community: "r/Sleep",
    title: "My sleep schedule is completely destroyed",
    description:
      "Late nights scrolling, early morning classes, and constant stress have ruined natural sleep. Even when time exists, the mind refuses to rest. Sleep becomes optional, and exhaustion becomes normal."
  },
  {
    community: "r/Education",
    title: "Do exams actually test intelligence?",
    description:
      "Most exams reward memory over understanding. Students who can memorize quickly score high, while those who truly understand concepts struggle. Intelligence is reduced to how much information you can dump on paper."
  },
  {
    community: "r/HostelLife",
    title: "Hostel food is survival, not enjoyment",
    description:
      "You eat not because you want to, but because hunger forces you. Taste becomes irrelevant, and routine takes over. Complaints are common, solutions are rare, and acceptance becomes the only option."
  },
  {
    community: "r/Programming",
    title: "Coding is not talent, it’s repetition",
    description:
      "People call good programmers talented, but the truth is boring repetition. Writing bad code, fixing errors, and failing daily is what actually builds skill. Discipline matters more than intelligence."
  },
  {
    community: "r/DarkMode",
    title: "Dark mode should be the default everywhere",
    description:
      "Light mode feels harsh, especially at night. Dark mode is easier on the eyes, looks cleaner, and feels modern. Once you switch, going back feels uncomfortable and unnecessary."
  },
  {
    community: "r/CareerAdvice",
    title: "Do grades really matter after college?",
    description:
      "Grades help initially, but skills decide everything later. Companies look for problem-solving, communication, and experience. Marksheets fade, but competence stays relevant for years."
  },
  {
    community: "r/NightThoughts",
    title: "Late night silence makes thoughts louder",
    description:
      "When the world sleeps, thoughts wake up. Regrets, plans, fears, and memories surface without distraction. Night becomes the most honest time of the day."
  }
];

app.get("/posts", (req, res) => {
  res.json(
    posts.map((p, i) => ({
      id: i,
      ...p,
      upvotes: Math.floor(Math.random() * 2000)
    }))
  );
});

app.listen(5000, () => {
  console.log("THREADS server running at http://localhost:5000");
});
