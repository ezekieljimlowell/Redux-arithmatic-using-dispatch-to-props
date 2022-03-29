
const initialState = {
    input1: "",
    input2: "",
    additionResult: "",
    subtractResult: ""
}

const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    //console.log(payload);
    switch (type) {
        case "SAVEINPUTS":
            return {
                ...state,
                ...payload
            }
        case "ADDITIONRESULT":
            return {
                ...state,
                ...payload,
                additionResult: (parseFloat(state.input1) + parseFloat(state.input2)).toFixed(2)
            }
        case "SUBTRACTRESULT":
            return {
                ...state,
                ...payload,
                subtractResult: (parseFloat(state.input1) - parseFloat(state.input2)).toFixed(2)
            }
        case "RESET":
            return {
                ...state,
                ...payload,
                input1: "",
                input2: "",
                additionResult: "",
                subtractResult: ""
            }
        default: return state
    }
}

export default reducer;