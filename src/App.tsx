import Header from "./components/Header";
import { Home, About, Project, Skills, Contact } from "./pages";
import { Arrow } from "./components/Arrow";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Arrow />
    </>
  );
}
