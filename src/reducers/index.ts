import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {MainState, Dispatcher} from '../store';

export const useDispatcher = () => useDispatch<Dispatcher>();
export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector;
