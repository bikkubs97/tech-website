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
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    heading1: 'Default Heading 1',
    paragraph1: 'Default Paragraph 1',
    heading2: 'Default Heading 2',
    paragraph2: 'Default Paragraph 2',
    heading3: 'Default Heading 3',
    heading4: 'Default Heading 4',    
    paragraph3: 'Default Paragraph 3',
    subheading1: 'Default Subheading 1',
    subheading2: 'Default Subheading 2',
    subheading3: 'Default Subheading 3',
    subheading4: 'Default Subheading 4',
    subheading5: 'Default Subheading 5',
    subheading6: 'Default Subheading 6',
    subheading7: 'Default Subheading 7',
    subheading8: 'Default Subheading 8',
    subheading9: 'Default Subheading 9',
    paragraph4: 'Default Paragraph 4',
    paragraph5: 'Default Paragraph 5',
    paragraph6: 'Default Paragraph 6',
    paragraph7: 'Default Paragraph 7',
    paragraph8: 'Default Paragraph 8',
    paragraph9: 'Default Paragraph 9',
    paragraph10: 'Default Paragraph 10',
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
  