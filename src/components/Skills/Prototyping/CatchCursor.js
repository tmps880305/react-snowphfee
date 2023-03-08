import React from 'react';

import classes from './CatchCursor.module.css';

const CatchCursor = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.slg}>
                <div className={classes.slg}>CatchCursor - a voice interface to control your mouse with voice</div>
            </div>
        </div>
    )
};

export default CatchCursor;
