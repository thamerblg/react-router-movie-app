import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import MoviesDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/moviesDetails/:id" component={MoviesDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
