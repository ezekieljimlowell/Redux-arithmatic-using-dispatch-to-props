import React, { useState } from "react";
import { connect } from "react-redux";
import { saveInputs, additionResult, subtractResult, resetValue } from '../Redux/actions';

const DispatchMethods = (props) => {
    const { additionResult, resetValue, saveInputs, state, subtractResult } = props;
    //console.log(state);

    const [inputs, setInputs] = useState({
        input1: "",
        input2: ""
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const resetHandler = () => {
        setInputs({
            ...inputs,
            input1: "",
            input2: ""
        });
        saveInputs(inputs);
        resetValue(inputs)
    }

    const subtractHandler = () => {
        saveInputs(inputs);
        subtractResult(inputs);
    }

    const additionHandler = () => {
        saveInputs(inputs);
        additionResult(inputs);
    }

    return (
        <>
            <h1>Addition using mapStateToProps and mapDispatchToProps</h1>
            <div>{state.additionResult}</div>
            <div>{state.subtractResult}</div>
            <input type="text" onChange={handleChange} name="input1" value={inputs.input1}></input>
            <input type="text" onChange={handleChange} name="input2" value={inputs.input2}></input>
            <button type="text" onClick={additionHandler}>Add By dispatch</button>
            <button type="text" onClick={subtractHandler}>Subtract by dispatch</button>
            <button type="text" onClick={resetHandler}>Reset</button>
        </>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveInputs: (val) => dispatch(saveInputs(val)),
        additionResult: (val) => {
            return dispatch(additionResult(val))
        },
        subtractResult: (val) => dispatch(subtractResult(val)),
        resetValue: (val) => dispatch(resetValue(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DispatchMethods);