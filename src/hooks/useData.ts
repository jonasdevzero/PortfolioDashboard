import { useContext } from "react";
import { DataContext, DataStateI } from "../contexts/DataContext";

export function useDispatch() {
    const dispatch = useContext(DataContext).dispatch
    return dispatch
}

type SelectorFunction = (state: DataStateI) => any

export function useSelector(fn: SelectorFunction) {
    const state = useContext(DataContext).state
    return fn(state)
}
