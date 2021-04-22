import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import Article from './views/LandingPage/Sections/articles/Document';
//import Articles from './views/LandingPage/Sections/docs';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
   
    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/">
        <LandingPage/>
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/art">
          <Article />
        </Route>
        
       </Switch>
    </div>
  </BrowserRouter>
 
  );
}

export default App;
