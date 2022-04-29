import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {MainState, Dispatcher} from '../store';

// to use event Dispatch of redux
export const useDispatcher = () => useDispatch<Dispatcher>();

// to use selector of redux
export const useAppSelector: TypedUseSelectorHook<MainState> = useSelector;
