export const ACTION_SIGNS_SET = 'signs:SET'
export const ACTION_SIGNS_FETCHING = 'signs:FETCHING'


export const signsFetchingAction = () => ({
    type: ACTION_SIGNS_FETCHING
})

export const signsSetAction = payload => ({
    type: ACTION_SIGNS_SET,
    payload
})

