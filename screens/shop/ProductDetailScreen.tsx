import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = (props: { navigation: { getParam: (arg0: string) => any } }) => {
  const productId = props.navigation.getParam('productId');
  const productTitle = props.navigation.getParam('productTitle');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find((prod: { id: any }) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Text style={styles.title}>Title: {productTitle}</Text>
      <Text style={styles.price}>{selectedProduct.price && `Price: NZD $${selectedProduct.price.toFixed(2)}`}</Text>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData: { navigation: { getParam: (arg0: string) => any } }) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: '#888',
    textAlign: 'center',
    marginTop: 20
  },
  price: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  }
});

export default ProductDetailScreen;
