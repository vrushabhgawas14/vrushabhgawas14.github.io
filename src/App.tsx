import Header from "./components/Header";
import { Home, About, Project, Skills, Contact } from "./pages";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </>
  );
}
