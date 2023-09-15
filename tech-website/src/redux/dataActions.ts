// dataActions.ts

// Define action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST' as const;
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS' as const;
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE' as const;

// Define a type for your data shape
type DataShape = {
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

// Action creators with type annotations
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: DataShape) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: Error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Additional action types for data actions
type FetchDataRequestAction = ReturnType<typeof fetchDataRequest>;
type FetchDataSuccessAction = ReturnType<typeof fetchDataSuccess>;
type FetchDataFailureAction = ReturnType<typeof fetchDataFailure>;

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;
