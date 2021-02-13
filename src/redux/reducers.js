import { combineReducers } from 'redux'


const items = [
  {
    key: 1,
    title: "Assurance d'une voiture",
    body: 'amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt;',
    type: 1,
    price: 300,
    image: require('../assets/images/offre1.jpg')
  },
  {
    key: 2,
    title: "Assur'Moto : L'assurance qui vous convient",
    body: 'labore et dolore magna aliqua. Ut enim ad minim veniam',
    type: 2,
    price: 500,
    image: require('../assets/images/offre2.png')
  },
  {
    key: 3,
    title: "L’assurance d’un camion",
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitam',
    type: 3,
    price: 4099,
    image: require('../assets/images/offre3.jpg')
  },
  {
    key: 4,
    title: "Offre 4",
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitam',
    type: 1,
    price: 3500,
    image: require('../assets/images/offre1.jpg')
  },
  {
    key: 5,
    title: "Offre 5",
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitam',
    type: 2,
    price: 1599,
    image: require('../assets/images/offre2.png')
  },
  {
    key: 6,
    title: "Offre 6",
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitam',
    type: 3,
    price: 1999,
    image: require('../assets/images/offre3.jpg')
  },
]

const itemsReducer = (state = [...items], action) => {
  switch (action.type) {
    case 'addItem':
      return [...state, action.item];
    case 'removeItem':
      return state.filter((item, index) => item.key !== action.item.key);
    default:
      return state;
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'addCartItem':
      return [...state, action.payload];
    case 'removeCartItem':
      return state.filter((item, index) => item !== action.payload);
    default:
      return state;
  }
}

const allReducers = combineReducers({
  cartItems: cartReducer,
  items: itemsReducer
});

export default allReducers;