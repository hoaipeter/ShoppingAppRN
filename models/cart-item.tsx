class CartItem {
  quantity: number;
  productPrice: any;
  productTitle: any;
  sum: number;

  constructor(quantity: number, productPrice: any, productTitle: any, sum: number) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
  }
}

export default CartItem;
