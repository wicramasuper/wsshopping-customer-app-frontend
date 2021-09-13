import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './customer-cart/Header';
import Addquantity from './customer-cart/Addquantity';
import Displayquantity from './customer-cart/Displayquantity';
import Updateqty from './customer-cart/Updateqty';


function App() {
  return (
    
    <div className="App">
      <Router>
        <div>
      <Header/>
      
       <Route path="/add" exact component={Addquantity} />
       <Route path="/" exact component={Displayquantity} />
       <Route path="/Updateqty/:id" exact component={Updateqty} />
       
       </div>
       </Router>

    </div>
    
  );
}

export default App;
