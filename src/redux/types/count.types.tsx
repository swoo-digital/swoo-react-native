

export const UPDATE_COUNT = "UPDATE_COUNT"

interface UpdateCount {
    type: typeof UPDATE_COUNT,
    payload: number
}


export type CountActionTypes = UpdateCount 