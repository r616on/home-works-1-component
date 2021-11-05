import "./App.css";
import React from "react";
import { Switch, Route, Link, HashRouter } from "react-router-dom";
import ShopItemFunc from "./components/ShopItemFunc/ShopItemFunc";
import ShopItemFuncClass from "./components/ShopItemFuncClass/ShopItemFuncClass";
import Calendar from "./components/Calendar/Calendar";
import moment from "moment";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£",
};
const itemClass = {
  brand: "Tiger of Sweden",
  title: "Other bla bla bla",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 499,
  currency: "£",
};

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/FuncComponents">FuncComponents</Link>
            </li>
            <li>
              <Link to="/ClassComponents">ClassComponents</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Calendar">
            <CalendarComponents />
          </Route>
          <Route path="/FuncComponents">
            <FuncComponents />
          </Route>
          <Route path="/ClassComponents">
            <ClassComponents />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

function FuncComponents() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        {/* <ShopItemFunc item={item} /> */}
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

function ClassComponents() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        {/* <ShopItemFunc item={item} /> */}
        <ShopItemFuncClass item={itemClass} />
      </div>
    </div>
  );
}
function CalendarComponents() {
  const now = moment();

  // внутри компонента App:
  return <Calendar date={now} />;
}
