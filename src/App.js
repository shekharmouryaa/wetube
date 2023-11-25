import './App.css';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
// import Childthree from './Childthree';
import { CounterAppProvider } from './CounterAppProvider';

function App() {

  return (
    <div >
      <CounterAppProvider>
         <ChildOne/>
         <ChildTwo/>
     </CounterAppProvider>
     
    </div>
  );
}

export default App;
