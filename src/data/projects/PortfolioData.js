class PortfolioData {
    constructor() {
        if (PortfolioData._instance) {
            return PortfolioData._instance;
        }

        this.data = {
            landing: {
                title: 'Portfolio',
                subTitle: 'a React project using modern hook functions',
                img: {src: require('../../assets/img/projects/portfolio/portfolio_main.png'), alt: 'catch-main'}
            },
            introduction: {
                title: 'Introduction',
                intro: 'I designed my portfolio using Figma and constructed it with React, wireframing and prototyping in Figma to guide the development process. Although the current version features static data, a dynamic data structure was prepared to facilitate future integration with a database.'
            },
            motionInfo: [
                {title: 'Focus', item: 'UX design / Front-end develop'},
                {title: 'Time', item: '10 weeks in total'},
                {title: 'Role', item: 'Web designer / Web developer'},
                {title: 'Tools', item: 'React / Figma / ChatGPT'}
            ],
            motion: [
                {
                    title: 'Prompt',
                    item: 'Portfolio is crucial for a front-end developer to showcase abilities and proficiency.'
                },
                {
                    title: 'Problem',
                    item: 'As a front-end developer, I need a portfolio !'
                },
                {
                    title: 'Solution',
                    item: 'Create my portfolio and display my works, using the popular front-end framework - React.'
                }
            ],
            timeline: {
                title: 'Timeline',
                src: require('../../assets/img/projects/catchcursor/catch_process.png'),
                alt: 'timeling-img'
            },
            toolInfo: {
                title: 'Tools',
                tools: [
                    {
                        name: 'Figma',
                        intro: 'Wireframing and prototyping was completed in Figma, making the development process more efficient.',
                        img: {src: require('../../assets/img/icon/tools/figma.png'), alt: 'figma-img'}
                    },
                    {
                        name: 'React',
                        intro: 'React was used to build the website by using hooks and css styling.',
                        img: {src: require('../../assets/img/icon/tools/react.png'), alt: 'rasp-img'}
                    },
                    {
                        name: 'ChatGPT',
                        intro: 'ChatGPT was used to enhance the quality of contents.',
                        img: {src: require('../../assets/img/icon/tools/chatgpt.png'), alt: 'edge-img'}
                    }

                ]
            },
            approach: {title: 'What\'s special'},
            projResults: {
                title: 'Results', subTitle: 'To be updated!', content: {
                    title: '',
                    items: []
                },
                img: {src: require('../../assets/img/projects/portfolio/portfolio_main.png'), alt: 'demo-gif'}
            },
            summary: {
                title: 'Summary',
                summary: {
                    title: '',
                    list: []
                }
            },
            futureWork: {
                title: 'Future work',
                futureworks: []
            },
        };

        PortfolioData._instance = this;
    }

    getData() {
        return this.data;
    }

    static getInstance() {
        if (!PortfolioData._instance) {
            PortfolioData._instance = new PortfolioData();
        }
        return PortfolioData._instance;
    }
}

export default PortfolioData;
