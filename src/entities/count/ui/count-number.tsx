import React from 'react';

import {countModel} from '../model';
import {UiText, UiView} from '../../../shared';

export const CountNumber = () => {
  const countNumber = countModel.selectors.getCount();

  return (
    <UiView>
      <UiText
        content={countNumber}
        color="#8CD6BD"
        fontSize="64px"
        fontWeight="bold"
      />
    </UiView>
  );
};
