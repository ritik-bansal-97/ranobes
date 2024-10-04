import React, { useState } from "react";
import './Bottomsheet.scss'

const Bottomsheet = (props) => {

    const closeBottomSheet = () => {
        props.handleToggle()
    };
    return (
        // <div className={`bottomsheetContainer ${props.show ? "show" : "hide" }`}>
        //     {props.children}
        // </div>
        <>
            <div className={`bottom-sheet ${props.show ? "open" : "close"}`}>
                <button onClick={closeBottomSheet} className="close-btn">
                    Close
                </button>
                <div className="bottom-sheet-content">
                    {props.children}

                </div>
            </div>
        </>
    )
}

export default Bottomsheet