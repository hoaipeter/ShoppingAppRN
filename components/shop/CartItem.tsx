import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  quantity: string;
  title: string;
  amount: number;
  deletable?: any;
  onRemove?: ((event: import('react-native').GestureResponderEvent) => void) | undefined;
};

const CartItem: React.FC<Props> = ({ quantity, title, amount, deletable, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.mainText} numberOfLines={2} ellipsizeMode="tail">
          Title: {title}
        </Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
      </View>
      <View style={styles.itemDataAction}>
        <Text style={styles.mainText}>{amount && `NZD $${amount.toFixed(2)}`}</Text>
        {deletable && (
          <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
            <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 'auto',
    borderRadius: 10
  },
  itemData: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20
  },
  itemDataAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  deleteButton: { marginLeft: 20 }
});

export default CartItem;
