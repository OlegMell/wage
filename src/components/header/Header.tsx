import React from "react"

import './Header.scss';

export const Header = (): React.ReactElement => {
    return (
        <div className="app-header">
            <div className="app-header-title">
                <span>Wage</span>
            </div>
        </div>
    )
}