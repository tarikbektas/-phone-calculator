 
import { useDispatch,useSelector} from 'react-redux';
import './App.css';
import { test2,test } from './store/slice/Calc';
import Top from './components/Top';
import Bottom from './components/Bottom';
function App() {
  return (
    <div className="App">
      <div className='main'>
        <Top></Top>
        <Bottom></Bottom>
        <div className='white-line'>-</div>
      </div>
    
    </div>
  );
}

export default App;
