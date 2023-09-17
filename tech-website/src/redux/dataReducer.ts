// dataReducer.ts

import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DataActionTypes,
  } from './dataActions';
  
  // Define the shape of your data
  type DataShape = {
    title: string;
    subtitle: string;
    heading1: string;
    paragraph1: string;
    heading2: string;
    paragraph2: string;
    heading3: string;
    heading4:string;
    paragraph3: string;
    subheading1: string;
    subheading2: string;
    subheading3: string;
    subheading4: string;
    subheading5: string;
    subheading6: string;
    subheading7: string;
    subheading8: string;
    subheading9: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
    paragraph7: string;
    paragraph8: string;
    paragraph9: string;
    paragraph10: string;
  };
  
  // Define the initial data state with default values for all properties
  const initialData: DataShape = {
    title: 'Your customized Token For Globally Compliant Distribution Events',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing',
    heading1: 'What Services, We Give You!',
    paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    heading2: 'Pricing Plans',
    paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    heading3: 'Next generation home intelligence is here',
    heading4: 'What Our fans are Saying about Us?',    
    paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    subheading1: 'Easy Bookings',
    subheading2: 'Swimming Pool',
    subheading3: 'Restaurant Home',
    subheading4: 'Mobile Payment',
    subheading5: 'Bank Card Service',
    subheading6: 'Best Home',
    subheading7: 'Super Fast Research',
    subheading8: 'Find Thousands of Similar Topics',
    subheading9: 'Create Content with Proven Popularity',
    paragraph4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    paragraph5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    paragraph6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada',
    paragraph7: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada. Sed vestibulum tincidunt quam, id tristique odio facilisis a. Nullam fermentum purus eu vehicula efficitur. Vivamus eleifend turpis eget ex vulputate, a tempus felis ultrices. Sed dignissim lorem eu neque dignissim.',
    paragraph8: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada. Sed vestibulum tincidunt quam, id tristique odio facilisis a. Nullam fermentum purus eu vehicula efficitur. Vivamus eleifend turpis eget ex vulputate, a tempus felis ultrices. Sed dignissim lorem eu neque dignissim.',
    paragraph9: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada. Sed vestibulum tincidunt quam, id tristique odio facilisis a. Nullam fermentum purus eu vehicula efficitur. Vivamus eleifend turpis eget ex vulputate, a tempus felis ultrices. Sed dignissim lorem eu neque dignissim.',
    paragraph10: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sapien vel ipsum ultrices malesuada. Sed vestibulum tincidunt quam, id tristique odio facilisis a. Nullam fermentum purus eu vehicula efficitur. Vivamus eleifend turpis eget ex vulputate, a tempus felis ultrices. Sed dignissim lorem eu neque dignissim.',
  };
  
  // Define the initial state for the data reducer
  interface DataState {
    data: DataShape;
    loading: boolean;
    error: Error | null;
  }
  
  const initialState: DataState = {
    data: initialData,
    loading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action: DataActionTypes): DataState => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  