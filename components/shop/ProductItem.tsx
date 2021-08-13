import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Card from '../UI/Card';

type Props = {
  onSelect: ((event: import('react-native').GestureResponderEvent) => void) | undefined;
  id: string;
  title: string;
  price: number;
  children: React.ReactNode;
};

const ProductItem: React.FC<Props> = ({ onSelect, id, title, price, children }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    // @ts-ignore
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product} key={id}>
      <View style={styles.touchable}>
        {/*// @ts-ignore*/}
        <TouchableCmp onPress={onSelect} useForeground>
          <View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {title}
              </Text>
              <Text style={styles.price}>{price && `NZD $${price.toFixed(2)}`}</Text>
            </View>
            <View style={styles.actions}>{children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 200,
    margin: 20
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  // imageContainer: {
  //   width: '100%',
  //   height: '60%',
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   overflow: 'hidden'
  // },
  // image: {
  //   width: '100%',
  //   height: '100%'
  // },
  details: {
    alignItems: 'center',
    height: '75%',
    padding: 20
  },
  title: {
    fontSize: 25,
    fontFamily: 'open-sans-bold',
    marginVertical: 2,
    paddingBottom: 5
  },
  price: {
    fontSize: 18,
    fontFamily: 'open-sans',
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '23%',
    paddingHorizontal: 20
  }
});

export default ProductItem;
