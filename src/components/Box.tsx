import styled from 'styled-components/native';

const Box = styled.View({
  flex: 1,
  backgroundColor: (props: any) => props.theme.primary.colors.bg,
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  alignItems: 'center',
});

export default Box;
