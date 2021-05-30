import React, { useState, MouseEvent } from "react";

const Container: React.FC = () => {
    const [state, setState] = useState<{count: number}>({count: 0});
    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => setState({ count: ++state.count });
    return (<>
        <p>State: {state.count}</p>
        <button onClick={clickHandler}>Set state</button>
        <br/>
    </>);
}

export default Container;
