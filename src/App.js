// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Loving from "./pages/Loving";
import Wonder from "./pages/Wonder";
import Leadership from "./pages/Leadership";
import Changing from "./pages/Changing";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "./pages/Location";
import Why_us from "./pages/Why_us";
import Our_story from "./pages/Our_story";
import About_us from "./pages/About_us";
import Bosqich1 from "./pages/1_bosqich";
import Bosqich2 from "./pages/2_bosqich";
import Bosqich3 from "./pages/3_bosqich";
import Educators from "./pages/Educators";
import Dasturlar from "./pages/Dasturlar";
import Oshxona from "./pages/oshxona";
import Login from "./pages/Login";
import CabinetEducator from "./pages/cabinetEducator";
import Yoga from "./css/Yoga";
import Kids from "./pages/kids";
import Musiqa from "./pages/Musiqa";
import Garden from "./pages/Garden";
import Steam from "./pages/Steam";
import Cooking from "./pages/Cooking";
import Pedagogy from "./pages/Pedagogy";
import News from "./pages/News";
import New from "./pages/New";
import Tadbirlar from "./pages/Tadbirlar";
import Tadbir from "./pages/Tadbir";
import Rahbariyat from "./pages/Rahbariyat";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Qabul from "./pages/Qabul";
import Galereya from "./pages/Galereya";
import Rahbarlar from "./pages/Rahbarlar";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/uz">
          <Dashboard />
        </Route>
        <Route exact path="/loving/uz">
          <Loving />
        </Route>
        <Route exact path="/wonder/uz">
          <Wonder />
        </Route>
        <Route exact path="/leadership/uz">
          <Leadership />
        </Route>
        <Route exact path="/changing/uz">
          <Changing />
        </Route>
        <Route exact path="/manzil/uz">
          <Location />
        </Route>
        <Route exact path="/nimauchunbiz/uz">
          <Why_us />
        </Route>
        <Route exact path="/bizhaqimizda/uz">
          <About_us />
        </Route>
        <Route exact path="/bizningtarix/uz">
          <Our_story />
        </Route>
        <Route exact path="/galereya/uz">
          <Galereya />
        </Route>
        <Route exact path="/tarbiyachilar/uz">
          <Educators />
        </Route>
        <Route exact path="/dastur_1/uz">
          <Bosqich1 />
        </Route>
        <Route exact path="/dastur_2/uz">
          <Bosqich2 />
        </Route>
        <Route exact path="/dastur_3/uz">
          <Bosqich3 />
        </Route>
        <Route exact path="/dasturlar/uz">
          <Dasturlar />
        </Route>
        <Route exact path="/oshxona/uz">
          <Oshxona />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/educator">
          <CabinetEducator />
        </Route>
        <Route exact path="/yoga/uz">
          <Yoga />
        </Route>
        <Route exact path="/musiqa/uz">
          <Musiqa />
        </Route>
        <Route exact path="/garden/uz">
          <Garden />
        </Route>
        <Route exact path="/steam/uz">
          <Steam />
        </Route>
        <Route exact path="/cooking/uz">
          <Cooking />
        </Route>
        <Route exact path="/pedagogy/uz">
          <Pedagogy />
        </Route>
        <Route exact path="/curriculm/uz">
          <Qabul />
        </Route>
        <Route exact path="/yangiliklar/uz">
          <News />
        </Route>
        <Route exact path="/yangilik/uz">
          <New />
        </Route>
        <Route exact path="/tadbirlar/uz">
          <Tadbirlar />
        </Route>
        <Route exact path="/tadbir/uz">
          <Tadbir />
        </Route>
        <Route exact path="/rahbariyat/uz">
          <Rahbariyat />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
