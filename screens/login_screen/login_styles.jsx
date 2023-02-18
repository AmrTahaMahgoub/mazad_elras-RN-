
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#4982FF',
    },
    headerHightStyle: {
        height: '30%',
    },
    headerRowStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
    }
    ,
    textHeaderStyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: "27%",
        fontFamily: "Tajawal-Bold",
    },
    textHeaderStyle2: {
        fontSize: 15,

        color: '#FFFFFF',
        marginLeft: "25%",
        fontFamily: 'Tajawal-Regular',
    },
    imagesStyle: {

        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        margin: "4%"

    },
    columnTextInputStyle: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",

    },
    forgotPasswordTextStyle: {
        color: '#4169E1',
        fontWeight: 'bold',
        textAlign: 'right',

        marginLeft: '65%',
        marginTop: "5%",
        marginBottom: "18%"
    },
    dontHaveAccountStyle: {
        color: '#808080',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: "5%"

    },
    loginButtonStyle: {
        color: '#4169E1',
        alignItems: "center",

    },
    pressableTextStyle: {

        fontFamily: "Tajawal-Bold",
        textAlign: 'center',
      
    },

});
export default Styles