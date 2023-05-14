import { useState } from 'react';
import './App.scss';

export const BlockGlow = () => {
    const [emptyStyle, setEmptyStyle] = useState(true);

    if (emptyStyle) {
        setTimeout(() => {
            setEmptyStyle(false)
        }, 40000 * Math.random())
    }

    if (!emptyStyle) {
        setTimeout(() => {
            setEmptyStyle(true);
        }, 40000  * Math.random())
    }
    return (
        <div className={emptyStyle ? "block_glow" : "block_simple"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

}