import { useState } from 'react';


function BackButtons({ id, panBack }) {

    if (id == 1) {
        return (
            <>
                <button className="back-1" onClick={panBack}>
                    back 1
                </button>
            </>
        );
    }
    else if (id == 2) {
        return (
            <>
                <button className="back-2" onClick = {panBack}>
                    back 2
                </button>
            </>
        );
    }
    return null;
}

export default BackButtons;