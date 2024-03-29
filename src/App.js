import "./App.css";
import { Route, Routes } from "react-router-dom";

import Accordion from "./components/accordion/Accordion";
import Nav from "./components/navigation/Nav";
import Todo from "./components/todo/Todo";
import Gallery from "./components/filter/Gallery";
import DarkLightTheme from './components/darLightTheme/DarkLightTheme';



function App() {
  return (
    <>
      <aside>
        <Nav />
      </aside>
      <main>
        <Routes>
          <Route exact path="/" element={<Accordion />}></Route>
          <Route exact path="todolist" element={<Todo />}></Route>
          <Route exact path="filter" element={<Gallery />}></Route>
          <Route exact path="dark-light-theme" element={<DarkLightTheme />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
