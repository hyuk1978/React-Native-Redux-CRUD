import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addShoppingList } from '../redux/slice/ShoppingSlice';

const InputForm = () => {
    const [currentValue , setCurrentValue] = useState("");
    const dispatch = useDispatch();    

    const handleSubmit = () => {
        if(currentValue !== '') {
            dispatch(addShoppingList(currentValue));
            setCurrentValue("");
        }
    }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
        style={styles.addContainer}
    >
        <TextInput
            style={styles.inputShoppingList}
            placeholder='구매하실 상품을 작성해주세요'
            value={currentValue}
            onChangeText={setCurrentValue}
            onSubmitEditing={handleSubmit} // 버튼 클릭 이외의 엔터키 등으로도 함수 호출할 수 있도록
        />
        <Pressable onPress={handleSubmit} style={({pressed})=> (pressed ? styles.pressedShoppingList : styles.addShoppingList)} >
            {({pressed}) => (
                <Text style={styles.addShoppingText} > {pressed ? '입력됨' : '입력'} </Text>
            )}
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
    addContainer : {
        flexDirection : 'row',
        marginTop : 20,
        marginBottom : 30,
        paddingHorizontal : 20,
        backgroundColor : '#f7f8fa',
    },
    inputShoppingList : {
        flex : 1,
        height : 40,
        padding : 8,
        marginRight : 20,
        borderRadius : 8,
        borderColor : 'rgba(0,0,0,0.3)',
        borderWidth : 1,
        color : '#000000',
        fontSize : 16,
        textAlignVertical : 'center',
    },
    addShoppingList : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 8,
        borderRadius : 8,
        backgroundColor : 'rgba(0,0,0,0.7)',
    },
    pressedShoppingList : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 8,
        borderRadius : 8,
        backgroundColor : 'rgba(15, 23, 255, 0.7)',
    },
    addShoppingText : {
        color : '#fff',
        fontSize : 16, 
    },
})