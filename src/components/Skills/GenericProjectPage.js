import {useLayoutEffect} from "react";
import ProjectInfo from "../../components/Layout/ProjectInfo/ProjectInfo";
import ProjectMotion from "../../components/Layout/ProjectMotion/ProjectMotion";
import ProjIntroduction from "../../components/Layout/ProjectContent/ProjIntroduction/ProjIntroduction";
import ProjProcess from "../../components/Layout/ProjectContent/ProjProcess/ProjProcess";
import ProjToolsList from "../../components/Layout/ProjectContent/ProjTools/ProjToolsList";
import ProjApproach from "../../components/Layout/ProjectContent/ProjApproach/ProjApproach";
import ProjResult from "../../components/Layout/ProjectContent/ProjResult/ProjResult";
import ProjSummary from "../../components/Layout/ProjectContent/ProjSummary/ProjSummary";
import ProjFutureWork from "../../components/Layout/ProjectContent/ProjFutureWork/ProjFutureWork";

const GenericProjectPage = ({data, LandingComponent, classes, onWatchDemo, demoRef}) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes}>
            {data.landing && <LandingComponent landing={data.landing}/>}
            {data.motionInfo && <ProjectInfo info={data.motionInfo}/>}
            {data.motion && <ProjectMotion motion={data.motion}/>}
            {data.introduction && <ProjIntroduction
                introduction={data.introduction}
                onWatchDemo={onWatchDemo}
            />}
            {data.timeline && <ProjProcess timeline={data.timeline}/>}
            {data.toolInfo && <ProjToolsList tools={data.toolInfo}/>}
            {data.approach && <ProjApproach approach={data.approach}/>}
            {data.result && <ProjResult projResults={data.projResults} demoRef={demoRef}/>}
            {data.summary && <ProjSummary summary={data.summary}/>}
            {data.futureWork && <ProjFutureWork futureWork={data.futureWork}/>}
        </div>
    );
};

export default GenericProjectPage;
