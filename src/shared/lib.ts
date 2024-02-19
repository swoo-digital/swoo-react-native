import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const UseCountDispatch: () => RootDispatch = useDispatch;
export const UseCountSelector: TypedUseSelectorHook<RootState> = useSelector;
