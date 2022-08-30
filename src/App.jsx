import './App.css'
import "antd/dist/antd.css";
import SqlLogs from './components/SqlLogs';
import { Provider } from 'react-redux';
import store from './redux/store';

//   { code: `{"employees": [ {"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}`, language: 'json' },

function App() {
  return <>
    <Provider store={store}>
      <div className="App">
        <SqlLogs />
      </div>
    </Provider>
  </>;
}

export default App;
