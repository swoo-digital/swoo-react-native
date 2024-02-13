import {RootState} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../store/slices/counter.slice';

export default function useCounterState() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  return {
    counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}
