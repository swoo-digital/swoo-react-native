import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react-native';
// reducers
import reducer from 'services/redux/reducers';

export const renderWithProviders = (children: ReactNode) => {
  const store = configureStore({reducer});

  return render(<Provider store={store}>{children}</Provider>);
};
