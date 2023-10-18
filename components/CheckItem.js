import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Trash from '../assets/trash.svg'
import Checkbox from '../assets/checkbox.svg'
import CheckboxChecked from '../assets/checkbox-checked.svg'
import { useDispatch } from 'react-redux'
import { updateList } from '../redux/slice/ShoppingSlice'
import { deleteItem } from '../redux/slice/ShoppingSlice'

const CheckItem = (props) => {
    const dispatch = useDispatch()
  return (
    <View style={styles.itemContainer}>
        <Pressable
            style={styles.shoppingItem}
            hitSlop={10}
            onPress={() => dispatch(updateList(props.id))}
        >
            {props.state === 'buy' ? 
            (<Checkbox style={styles.checkboxIcon}/>)
            : 
            (<CheckboxChecked style={styles.checkboxCheckedIcon}/>)}
        </Pressable>
        <Text
            style={[styles.shoppingItemText,
                props.state === 'completed' ? styles.itemChecked : '']}    
        >
            {props.text}
        </Text>
        <Pressable
            style={[styles.deleteButton, 
                props.state === 'complete' ? styles.deleteButtonDone : '']}
            hitSlop={10}
            onPress={()=>dispatch(deleteItem(props.id))}
        >
            <Trash styles={styles.deleteIcon}/>
        </Pressable>
    </View>
  )
}

export default CheckItem

const styles = StyleSheet.create({
    itemContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        paddingTop : 10,
        paddingBottom : 15,
        paddingHorizontal : 15,
        backgroundColor : '#f7f8fa',
    },
    shoppingItem : {
        justifyContent : 'center',
        alignItems : 'center',
        width : 20,
        height : 20,
        marginRight : 12,
        borderRadius : 6,
    },
    shoppingItemText : {
        marginRight : 'auto',
        paddingRight : 15,
        fontSize : 15,
        lineHeight : 20,
        color : '#737373'
    },
    itemChecked : {
        opacity : 0.3,
        textDecorationLine : 'line-through',
    },
    checkboxCheckedIcon : {
        shadowColor : '#000',
        shadowOpacity : 0.14,
        shadowRadius : 8,
        shadowOffset : {
            width : 0,
            height : 4,
        }
    },
    deleteButton : {
        opacity : 0.8,
    },
    deleteButtonDone : {
        opacity : 0.3
    }
})