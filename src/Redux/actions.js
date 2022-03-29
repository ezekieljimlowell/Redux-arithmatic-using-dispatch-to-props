
let saveInputs = (number) => {
    //console.log(number);
    return {
        type: "SAVEINPUTS",
        payload: number
    }
}

let additionResult = (number) => {
    //console.log(number);
    return {
        type: "ADDITIONRESULT",
        payload: number
    }
}

let subtractResult = (number) => {
    //console.log(number);
    return {
        type: "SUBTRACTRESULT",
        payload: number
    }
}

let resetValue = (number) => {
    //console.log(number);    
    return {
        type: "RESET",
        payload: number
    }
}

export {saveInputs, additionResult, subtractResult, resetValue}