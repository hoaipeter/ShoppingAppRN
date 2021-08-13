# ShoppingAppRN
A Shopping App using React Native, Typescript, React Navigation, Redux, Redux-Thunk, Redux-persist and Firebase.

## Features
- [x] **Authentication screen to log in or sign up.**
- [x] **Shop to see all products and product details.**
- [x] **Cart to add/remove products and order them.**
- [x] **Orders screen to retrieve orders.**
- [x] **User admin to create, update and delete products.**

## Technologies:

### React Navigation
- Handling stack of screens for products, orders and user admin with createStackNavigator and createAppContainer.
- Using props.navigation to navigate between screens.
- Handling data from component to header with setParams and getParam.
- Custom header title with navigationOptions.
- Custom cart button with react-navigation-header-buttons.
- Custom SideDrawer with react-navigation-drawer.
- Adding listener with props.navigation.addListener to reload data from server.
- Handling manual logout with SafeAreaView and DrawerNavigatorItems.
- Handling auto logout and forced reload with a custom wrapper for the navigator thanks to useRef and NavigationActions.

### Redux, React-Redux and Redux-persist
- Using actions and reducers to authenticate and to store data (token and user ID, products, cart, orders).
- Using useSelector hook to get the state.
- Using props.navigation to pass data to the header without re-render.
- Using useDispatch hook to dispatch actions.
- Passing useDispatch to the header with useEffect and useCallback to limit re-render cycles.
- Handling logic for the cart (quantity, removing a product and clearing the cart).
- Keeping cart state during app loads/ refreshes
- Refreshing cart state after logout

### Redux-Thunk and Firebase
- Adding async code using Redux-thunk as a middleware.
- Using Firebase as a database for products and orders with fetch (POST, PATCH, DELETE).
- Handling authentication with Firebase (email and password).
- Showing a loading spinner with ActivityIndicator and useState while fetching data/trying to authenticate.
- Handling errors with try/catch blocks and throwing Alerts.
- Using getState from Redux-thunk to send http requests with a token.

### React Native
- Using FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Alert, AsyncStorage and SafeAreaView.
- Custom reusable components (Card, HeaderButton, Input).
- Custom fonts, color and environment constants.
- Using React hooks (useState, useEffect, useCallback, useReducer, useRef).
- Handling input validation with useReducer and custom TextInput component.
- Handling dates with Moment.js.
- Handling sessions with AsyncStorage, setItem and getItem.
