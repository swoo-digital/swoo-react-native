
import React  from 'react';
import { Provider } from 'react-redux';
import { Home } from './src/containers';
import { store } from './src/redux';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
