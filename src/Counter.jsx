import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Counter = () =>{
    const [count,setCount] = useState(0);

    return(
      
        <div className="p-5">
        <h1 className="display-4 fw-bold" style={{ fontFamily: 'serif' }}>Counter App</h1>
        <p className="pt-4 pb-2" style={{fontSize:"30px"}}>Count: {count}</p>
        <div>
            <button className="btn btn-outline-secondary me-2" style={{fontSize:"30px"}} onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-outline-secondary"style={{fontSize:"30px"}} onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    </div>
  
    );
}
export default Counter