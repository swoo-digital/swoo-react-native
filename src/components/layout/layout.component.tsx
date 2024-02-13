import React from 'react';
import styled from 'styled-components/native';

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const ContainerView = styled.SafeAreaView`
    height: 100%;
    background-color: #004761;
  `;

  return <ContainerView>{children}</ContainerView>;
};
export default Layout;
