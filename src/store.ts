import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './pages/resturants/restaurantsSlicer';
import dishesReducer from './components/dishesToShoOnHomePage/dishesSlicer';
import profileReducer from './pages/restaurantProfile/profileSlicer';
import orderReducer from './components/dishOrder/orderSlicer'
// const serviceApi = createServiceApi('/some/url');

export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      dishes: dishesReducer,
      profile: profileReducer,
      order: orderReducer,
      
  },
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware()
})

