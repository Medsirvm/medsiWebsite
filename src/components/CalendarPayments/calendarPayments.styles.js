import { makeStyles } from "@material-ui/styles";
import { FONTS } from "../../constants/fontsConstants";
import { MAIN_COLORS } from "../../constants/colorConstants";

export const calendarPaymentsStyles = makeStyles({
    mainContainer: { 
        marginBottom:100, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }
});

export const sxStyles = {
    h5style: { fontWeight: "bold", marginTop: 4, marginRight: 'auto', marginBottom: 5, fontSize: 22, fontFamily: FONTS.URBANISMEDIUM, color: MAIN_COLORS.MAIN_PURPLE, },
    bodyStyle: { marginLeft: 47, fontFamily: "UrbanistBold", fontSize: 18, marginBottom: 1, },
    bodyStyle2: { marginLeft: 15, fontFamily: "UrbanistBold", fontSize: 18, color: MAIN_COLORS.BLUE_MEDIUM, },
}