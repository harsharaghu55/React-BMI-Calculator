import React, {useState} from 'react'

const initialValues = {
    weight:"",
    height:"",
    date:"",
}

const BmiForm = ({}) => {
    const [state,setState] = useState(initialValues);

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
    console.log(state.date)
    return(
        <React.Fragment>
            <div className="inputFiledsContainer">
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
                    onClick={()=>{}}
                >
                    Calaculate BMI
                </button>
            </div>
        </React.Fragment>
    );
}

export default BmiForm