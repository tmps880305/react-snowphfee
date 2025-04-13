import React, {forwardRef} from 'react';

import cntClasses from '../ProjContent.module.css';
import classes from './ProjResult.module.css';
import ProjectSeparator from "../../ProjectSeparator/ProjectSeparator";

const ProjResult = (props) => {
    return (
        <>
            <div className={cntClasses.cntContainer}>
                <ProjectSeparator title={props.projResults.title}/>
                <div className={cntClasses.cntWrap}>
                    <div className={classes['rstl-cnt']} ref={props.demoRef ?? null}>
                        <h3>{props.projResults.subTitle}</h3>
                        <div className={classes.intro}>
                            {props.projResults.content.title}
                            <ol>
                                {props.projResults.content.items.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    }
                                )}
                            </ol>
                        </div>
                        <img src={props.projResults.img.src} alt={props.projResults.img.alt}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProjResult;
