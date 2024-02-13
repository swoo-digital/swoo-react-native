import {AppDispatch, RootState} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';

export default function useCounterState() {
  const counter = useSelector((state: RootState) => state.counter);
  const useAppDispatch: () => AppDispatch = useDispatch;

  const {increment, decrement} = useAppDispatch();

  return {counter, increment, decrement};
}
