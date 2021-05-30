import React from "react";
import { styles } from "./another-container";

const Presentation: React.FC = ({children}) =>
{
    return <div style={styles}>
        {children}
    </div>
}

export default Presentation;