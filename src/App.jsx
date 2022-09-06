import './App.css'
import "antd/dist/antd.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './Layout'

function App() {
  return <>
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  </>;
}

export default App;
