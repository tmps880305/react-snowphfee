import React from 'react';

import classes from './MainSkill.module.css';
import MainSkillList from "./MainSkillList";


const DUMMY_SKILL_LISTS = [
    {
        id: 1,
        title: '01',
        items: [{id: '1-1', title: 'Front-end'}]
    },
    {
        id: 2,
        title: '02',
        items: [{id: '2-1', title: 'UX design'}]
    },
    {
        id: 3,
        title: '03',
        items: [{id: '3-1', title: 'Prototyping'}]
    },
    {
        id: 4,
        title: '04',
        items: [{id: '4-1', title: 'Accessibility'}]
    }
];

const MainSkill = (props) => {

    return (
        <div className={classes['skill-container']}>
            <div className={classes['skill-wrapper']}>
                <div className={classes.slogan}>
                    <h2>Skills</h2>
                </div>
                <div className={classes['skill-li-container']}>
                    {DUMMY_SKILL_LISTS.map(item => {
                        return <MainSkillList
                            key={item.id}
                            title={item.title}
                            items={item.items}
                        />
                    })}
                </div>
            </div>
        </div>
    )
};

export default MainSkill
