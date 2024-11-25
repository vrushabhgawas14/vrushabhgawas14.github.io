import Header from "./components/Header";
import { Home, About, Project, Skills, Contact, Events } from "./pages";
import { Arrow } from "./components/Arrow";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
      <Events />
      <Contact />
      <Arrow />
    </>
  );
}
