import React from "react";

import './Loader.scss'

export const Loader = (): React.ReactElement => {
    return (
        <div className="loader-overlay">
            <div className="loader">
                <div className="loader-entier">
                </div>
            </div>
        </div>
    )
}