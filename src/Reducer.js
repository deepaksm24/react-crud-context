import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap';
import { Student1 } from './components/TeacherDetails';

function Reducer() {
    const reducerstate = Student1;

    const reducer = (state, action) => {

        switch (action.type) {
            case "add":
                console.log(state);
            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, reducerstate);

    return (
        <div>Reducer {state.count}
            <Button
                onClick={() => dispatch({ type: "add" })}
            >  add</Button>
<div>
<h1>useRef</h1>

</div>
        </div>
    )
}

export default Reducer