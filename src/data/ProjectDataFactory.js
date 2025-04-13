import CatchCursorData from './projects/CatchCursorData';
import PixelPaperData from "./projects/PixelPaperData";
import PortfolioData from "./projects/PortfolioData";

export const getProjectData = (name) => {
    switch (name.toLowerCase()) {
        case 'catchcursor':
            return CatchCursorData.getInstance().getData();
        case 'pixelpaper':
            return PixelPaperData.getInstance().getData();
        case 'portfolio':
            return PortfolioData.getInstance().getData();
        default:
            throw new Error(`Unknown project name: ${name}`);
    }
};
