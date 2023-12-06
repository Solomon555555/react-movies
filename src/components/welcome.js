
import { useState } from 'react';

const Welcome = () => {

    const [counter, setCounter] = useState(0);

    {
        return (
            <>
          <button onClick={()=> setCounter((prevCount)=> prevCount -1 )}>-</button>
          <h1>{counter}</h1>
          <button onClick={()=> setCounter((prevCount)=> prevCount +1 )}>+</button>
          </>
        )
    };
}

export default Welcome