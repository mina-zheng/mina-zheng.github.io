import { useState } from 'react';


function BackButtons({ id, panBack }) {

    if (id == 1) {
        return (
            <>
                <button className="back-button" id="back-1" onClick={panBack}>
                    Back
                </button>
            </>
        );
    }
    else if (id == 2) {
        return (
            <>
                <button className="back-button" id="back-2" onClick = {panBack}>
                    Back
                </button>
            </>
        );
    }
    else if (id == 3) {
        return (
            <>
                <button className="back-button" id="back-3" onClick = {panBack}>
                    Back
                </button>
            </>
        );
    }
    return null;
}

export default BackButtons;