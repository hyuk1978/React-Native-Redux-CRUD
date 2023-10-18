import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../components/InputForm'
import CheckItem from '../components/CheckItem'
import { useSelector } from 'react-redux'
import ShoppingIcon from '../assets/shopping.svg'
const ShopScreen = () => {
    const items = useSelector(state => state.shopping.items);
    const buyList = items.filter((item) => item.state === 'buy');
    const completedList = items.filter((item) => item.state === 'completed');
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}><ShoppingIcon style={styles.shoppingIcon}/>쇼핑리스트</Text>
        <View style={styles.shopList}>
            <Text style={styles.listTitle}>필요한 것!</Text>
            {buyList.length !== 0 ? (
                <FlatList
                    data={buyList}
                    renderItem={({item}) => <CheckItem {...item}/>}
                    keyExtractor={(item) => item.id}
                />) :
                (<Text style={styles.emptyListText}>구매할 상품이 없습니다.</Text>)
            }
        </View>
        <View style={styles.separator}/>
        <View style={styles.shopList}>
        <Text style={styles.listTitle}>구매완료!!</Text>
            {completedList.length !== 0? (
                <FlatList
                    data={completedList}
                    renderItem={({item}) => <CheckItem {...item}/>}
                    keyExtractor={(item) => item.id}
                />
            ) : 
            (<Text style={styles.emptyListText}>구매한 상품이 없습니다</Text>)
        
        }
        </View>
        <InputForm/>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : Platform.OS === 'android' ? 20 : 0,
        backgroundColor : '#f7f8fa',
    },
    title : {
        marginBottom : 35,
        paddingHorizontal : 15,
        fontSize : 36,
        fontWeight : '600',
        color : '#5E5E5E'
    },
    shopList : {
        flex : 1,
    },
    listTitle : {
        marginBottom : 20,
        paddingHorizontal : 15,
        fontSize : 24,
        fontWeight : '600',
    },
    separator : {
        marginHorizontal : 10,
        marginTop : 20,
        marginBottom : 10,
        borderBottomWidth : 1,
        borderBottomColor : 'rgba(0,0,0,0.2)',
    },
    emptyListText : {
        paddingHorizontal : 15,
    },
    shoppingIcon : {
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 4,
    }
})