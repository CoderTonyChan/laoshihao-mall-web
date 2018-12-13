import {enums, PcCookie} from 'util/';

export default {
  getCartInfo(state) {
    state.cartInfo.totalPrice = 0;
    state.cartInfo.totalNum = 0;
    let list = state.cartList;
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      if (item.checked === 1 || item.checked === true) {
        let price = parseInt(item.productPrice);
        // let quantity = parseInt(item.quantity);
        // state.cartInfo.totalPrice += price * quantity;
        // state.cartInfo.totalNum += quantity;
        state.cartInfo.totalPrice += price * 1;// 全部按照1算
        state.cartInfo.totalNum += 1;
      }
    }
    return state.cartInfo;
  },
  getCartList(state) {
    if (state.cartList && state.cartList.length === 0) {
      state.cartList = PcCookie.get(enums.CART.SHOPPING_CART) ? JSON.parse(PcCookie.get(enums.CART.SHOPPING_CART)) : [];
    }
    return state.cartList;
  },
  getCurIndex(state) {
    return state.curIndex;
  }
};
