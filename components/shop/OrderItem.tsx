import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import Card from '../UI/Card';

type Props = {
  amount: number;
  date: React.ReactNode;
  item: any[];
};

const OrderItem: React.FC<Props> = ({ amount, date, item }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{amount && `NZD $${amount.toFixed(2)}`}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide details' : 'Show details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {item.map(cartItem => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 15,
    alignItems: 'center'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#888'
  },
  detailItems: {
    width: '100%'
  }
});

export default OrderItem;
