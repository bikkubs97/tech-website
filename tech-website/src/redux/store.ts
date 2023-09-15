// store.ts
import { createStore } from 'redux';
import dataReducer from './dataReducer'; 

const store = createStore(dataReducer);

export type RootState = ReturnType<typeof dataReducer>;

export default store;