import './App.css'
import "antd/dist/antd.css";
import RequestLogs from './components/RequestLogs';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return <>
    <Provider store={store}>
      <div className="App">
        <RequestLogs />
      </div>
    </Provider>
  </>;
}

export default App;
