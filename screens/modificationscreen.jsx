import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import CustomTextButton from './general_elements/customtextbtton';
import CustomInputText from './general_elements/customtextinput';



const ModificationScreen = () => {
    return (
        <View style={styles.mainViewstyle}>
            <View
                style={styles.imageContainerstyle}>

                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={require("../assets/saudiperson.jpg")}>
                    </Image>
                </View>
                <Pressable onPress={() => { console.log("hi") }}>

                    <Text style={styles.pressableTextstyle}>+ اضافه صورة</Text>



                </Pressable>
            </View>

            <CustomInputText name={"الاسم"} ></CustomInputText>
            <CustomInputText name={"رقم الهاتف"} ></CustomInputText>
            <CustomInputText name={"البريد الالكترونى"}></CustomInputText>
            <CustomInputText name={" كلمه السر"}></CustomInputText>

            <View style={styles.customTextButonstyle}>
                <CustomTextButton title={"حفظ"} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    mainViewstyle: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: "5%"
    },
    imageContainerstyle: {
        width: "95%",
        height: "20%",
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 10


    },
    profileImageContainer: {
        translateY: -43,
        alignSelf: 'center',
    },
    profileImage: {
        resizeMode: 'cover',
        height: 86,
        width: 86,
        borderWidth: 2,
        borderRadius: 75,

    },
    customTextButonstyle: {
        marginTop: "25%"
    },
    pressableTextstyle: {
        color: "#98BEFF", fontFamily: "Tajawal-Bold", margin: "2%"
    }
})
export default ModificationScreen