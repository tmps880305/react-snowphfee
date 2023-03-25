import React from 'react';

import classes from './ProjResult.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";
import demoCatch from "../../../../assets/img/projects/catchcursor/catch_demo.gif";

const ProjResult = (props) => {
    return (
        <>
            <ProjectSeparator title={props.projResults.title}/>
            <div className={classes['rstl-container']}>
                <div className={classes['rstl-wrap']}>
                    <h3>Demonstration</h3>
                    <div className={classes.intro}>
                        In the following GiF, I demonstrated how to control the cursor with my voice input:
                        <ol>
                            <li>
                                When I said 'CatchCursor', the large grid showed up for me as a reference to make
                                first-step selection.
                            </li>
                            <li>
                                Next, as I said 'five', I selected the large grid with #5, and the small grids showed
                                up
                                inside the selected area.
                            </li>
                            <li>
                                Finally, as I siad 'two', I selected the small grid with #2, and the cursor moved to the
                                center of box #2 then clicked.
                            </li>
                        </ol>
                    </div>
                    <img src={demoCatch} alt='catch-demo'/>
                </div>
            </div>
        </>
    )
};

export default ProjResult;
