import React from 'react';
import styled from 'styled-components/native';
import useTheme from '../../../hooks/useTheme.hook';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();
  const ContainerView = styled.SafeAreaView`
    height: 100%;
    background-color: ${theme.theme.colors.primaryBackground};
  `;

  return <ContainerView>{children}</ContainerView>;
};
export default Layout;
