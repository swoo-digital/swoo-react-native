import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionList from '../store/actions';

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionList, dispatch);
};
