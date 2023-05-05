import 'antd/dist/antd.css'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Helmet from 'react-helmet';
import RouteComponent from './components/Layout/RouteComponent'

function App() {

  return (
    <Provider store={store}>
      <Helmet>
        <title>Book Store</title>
      </Helmet>
      <RouteComponent />
    </Provider>
  );
}

export default App;
