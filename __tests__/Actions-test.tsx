import 'react-native';
import {adding, subtracting} from '../src/actions';
it('Increment function', async () => {
  adding();
});

it('Decrement function', async () => {
  subtracting();
});
