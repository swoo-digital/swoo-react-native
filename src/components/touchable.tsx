import styled from "styled-components/native";
import { colors } from "../theme";

export const Touchable = styled.TouchableOpacity({
    backgroundColor: colors.white,
    width: 160,
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
});