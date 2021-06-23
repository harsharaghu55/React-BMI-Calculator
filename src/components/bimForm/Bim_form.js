import React, {useState} from 'react'

const initialValues = {
    weight:"",
    height:"",
    date:"",
}

const BmiForm = ({setBmi}) => {
    const [state,setState] = useState(initialValues);

    function calculateClickHandler() {
        var bmi = state.weight/(((state.height)/100)**2)
        setBmi(bmi)
    }
    
    const handleChange = e =>{
        let {value,name} = e.target
        if(value > 999){
            value = 999
        }
        const date = new Date().toLocaleString()
        setState({
            ...state,
            [name]:value,
            date
        })

    }

    return(
        <React.Fragment>
            <div className="BimForm">
                <div className="inputFiledsContainer">
                    <label>
                        Weight:
                    </label>
                    <input 
                            id="weight"
                            name="weight"
                            type="number"
                            min="1"
                            max="999"
                            placeholder="50"
                            value={state.weight}
                            onChange={handleChange}
                    />
                    <label>
                        Height:
                    </label>
                    <input 
                            id="height"
                            name="height"
                            type="number"
                            min="1"
                            max="999"
                            placeholder="176"
                            value={state.height}
                            onChange={handleChange}
                    />
                </div>
                <div className="submitButtonContainer">
                    <button 
                        id="bmi-btn"
                        className="claculate-btn"
                        type="button"
                        disabled={state.weight === '' || state.height === ''}
                        onClick={calculateClickHandler}
                    >
                        Calaculate BMI
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BmiForm