
import './App.css';
import './Validation.js'
// import Demo_data_fetching from './Component/Demo_data_fetching';
import Header from './Component/Header';
import Home from './Component/Home';
import Add_Task from './Component/Add_Task';
import Delete_specific_task from './Component/Delete_specific_task';
import Display_all_task from './Component/Display_all_task';
import Display_Specific_task from './Component/Display_Specific_task';
import Remove_all_task from './Component/Remove_all_task';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/Add_Task" component={Add_Task}/>
            <Route exact path="/Delete_Specific_Task" component={Delete_specific_task}/>
            <Route exact path="/Display_all_task" component={Display_all_task}/>
            <Route exact path="/Display_Specific_task" component={Display_Specific_task}/>
            <Route exact path="/Remove_all_task " component={Remove_all_task}/>

          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
