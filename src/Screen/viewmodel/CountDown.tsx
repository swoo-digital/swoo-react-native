import { useState } from "react"
import { decrement, increment } from "../../Redux/actions/countActions"
import { useSelector, useDispatch } from 'react-redux';

export const ViewModel = () => {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter.count);

    /**
     * Using State 
     * @param type 
     */
    /*
    const onPressCount = (type: number) => {
        setCount(type == 0 ? count - 1 : count + 1)
    }
    */

    /**
     * Using Redux
     * @param type 
     */
    const onPressCount = (type: number) => {
        dispatch(type == 0 ? decrement() : increment())
    }

    return {
        onPressCount,
        count,
    }
}
