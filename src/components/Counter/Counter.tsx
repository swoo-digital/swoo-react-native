import React, {FC, useState} from 'react';
import styled from 'styled-components/native';

type TProps = {};

const Counter: FC<TProps> = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (value: number) => () => {
    setCount(curr => curr + value);
  };

  return (
    <SContainer>
      <SRow>
        <SPressable onPress={handleClick(1)}>
          <SPressableText>+1</SPressableText>
        </SPressable>
        <SCount>{count}</SCount>
        <SPressable onPress={handleClick(-1)}>
          <SPressableText>-1</SPressableText>
        </SPressable>
      </SRow>
    </SContainer>
  );
};

const SContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #004761;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const SRow = styled.View`
  width: 160px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: nowrap;
`;

const SPressable = styled.Pressable`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 160px;
  height: 61px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  /* gap: 10; */
  border-radius: 24px;
`;

const SPressableText = styled.Text`
  flex-shrink: 0;
  width: auto; /* 23px */
  height: auto; /* 29px */
  /* white-space: pre; */
  position: relative;
  font-weight: 700;
  /* font-family: 'Inter-Bold', 'Inter', sans-serif; */
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  /* line-height: 1.2; */
`;

const SCount = styled.Text`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  /* white-space: pre-wrap; */
  /* word-wrap: break-word; */
  /* word-break: break-word; */
  position: relative;
  font-weight: 700;
  /* font-family: 'Inter-Bold', 'Inter', sans-serif; */
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0px;
  /* line-height: 1.2; */
  text-align: center;
`;

export default Counter;
