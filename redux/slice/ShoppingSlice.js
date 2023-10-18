import { createSlice } from '@reduxjs/toolkit';
// const shoppingSlice = createSlice 리덕스 툴킷 가져오기


const shoppingSlice = createSlice({ 
    name:'shopping', 
    initialState : { // 초기 state 
        currentId : 0, // 생성시 고유 id 값 (기본값)
        items : [] // 초기 state 빈 배열
    },
    reducers: {
        addShoppingList : (state, action) => {
            state.items.push({ // 초기 설정한 items 배열에 할당하기
                id : state.currentId++,
                text : action.payload.trim(),
                state : 'buy' // 값이 할당되어있으면 state = buy 
            }) 
        },
        updateList : (state, action) => {
            // items 배열안에 일치하는 id값을 찾아 buy를 completed로 , completed를 buy로 변경
            const item = state.items.findIndex((item) => item.id === action.payload);
            state.items[item].state=state.items[item].state === 'buy' ? 'completed' : 'buy';
            state.items.push(state.items.splice(item, 1)[0]); // 기존에 있던 item을 찾아 제거 후 다시 push해줌
        },
        deleteItem : (state, action) => {
            const list = state.items.findIndex((item)=> item.id === action.payload);
            if(list > -1) { // 리스트에 목록이 있는 경우 
                state.items.splice(list, 1) ; // 리스트에 찾아 해당 아이템을 제거
            }
        },
    },
});


export default shoppingSlice.reducer; // 다른 곳에서 불러올 수 있도록 
export const { addShoppingList, updateList, deleteItem } = shoppingSlice.actions;