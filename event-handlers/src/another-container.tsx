import React, { useState, MouseEvent } from "react";
import Presentation from "./presentation";

export const styles = {
    display: "inline-block",
    width: "300px"
};

const AnotherContainer: React.FC = () => {
    const [state, setState] = useState<{ message: string }>({ message: "" });
    const onMouseOver = (event: MouseEvent<HTMLDivElement>) => setState({ message: "Inside" });
    const onMouseLeave = (event: MouseEvent<HTMLDivElement>) => setState({ message: "" });

    return (<>
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={styles}>
            Hover me!
        </div>
        <Presentation>{state.message}</Presentation>
    </>);
}

export default AnotherContainer;