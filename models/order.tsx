import moment from 'moment';

class Order {
  id: string;
  items: any;
  totalAmount: any;
  date: Date;

  constructor(id: string, items: any, totalAmount: any, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate() {
    // return this.date.toLocaleDateString("en-EN", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    //   hour: "2-digit",
    //   minute: "2-digit"
    // });
    // @ts-ignore
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
