import { StyleSheet } from "react-native";
import { AppThemColor } from "../../Utility/color";
import fonts from "../../Utility/fonts";

export const styles = StyleSheet.create({
    container: { backgroundColor: AppThemColor.darkgreen, flex: 1, justifyContent: "center", alignItems: "center" },
    count_container: { color: AppThemColor.lightgreen, fontFamily: fonts.Inter_B, fontSize: 64, marginVertical: 104 },
})