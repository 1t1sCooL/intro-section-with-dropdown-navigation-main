import { IntroPage } from "@/pages/intro/ui/IntroPage";

export const meta = () => [
  { title: "Frontend Mentor | Intro section with dropdown navigation" },
  {
    name: "description",
    content:
      "Snap helps teams make remote work. Keep everyone in sync, streamline processes, and watch productivity soar.",
  },
];

const Home = () => <IntroPage />;

export default Home;
