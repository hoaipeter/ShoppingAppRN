class Product {
  id: string;
  ownerId: string;
  title: string;
  price: number;
  // constructor(id: string, ownerId: string, title: string, imageUrl: string, description: string, price: number) {
  constructor(id: string, ownerId: string, title: string, price: number) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    // @ts-ignore
    // this.imageUrl = imageUrl;
    // // @ts-ignore
    // this.description = description;
    this.price = price;
  }
}

export default Product;
