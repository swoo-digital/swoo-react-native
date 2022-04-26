import React, {FC, ReactNode} from 'react';
import {Provider} from 'react-redux';
// services
import store from 'services/redux/store';

export const ReduxProvider: FC<{children?: ReactNode}> = ({children}) => (
  <Provider store={store}>{children}</Provider>
);
