import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

export const useRedux = () => {
  const {
    storeState: state,
    store: { dispatch }
  } = useContext(ReactReduxContext);

  return [state, dispatch];
};

export default useRedux;