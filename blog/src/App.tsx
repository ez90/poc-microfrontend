import React, { ReactElement } from 'react';
import Blog from './components/Blog';
import { SWrapper, SContent } from './styles';

const posts = [
    {
        title: 'Optional static typing',
        content: 'TypeScript introduces optional strong static typing: Once declared, a variable doesn’t change its type and can take only certain values.',
    },
    {
        title: 'Early spotted bugs',
        content: 'Researchers found that TypeScript detects 15 percent of common bugs at the compile stage.',
    },
    {
        title: 'Predictability',
        content: 'With TypeScript, everything stays the way it was initially defined. ',
    },
    {
        title: 'Readability',
        content: 'Due to adding strict types and other elements that make the code more self-expressive.',
    }
];

const App = (): ReactElement => (
    <>
        <h1>POC context: We could use typescript ?</h1>
        <p>
            👋 I&apos;m a feature application written with Typescript !
        </p>
        <p>
            Here we just display a <strong>typed</strong> react Blog component with <strong>typed</strong> props that
            show a list of <strong>typed</strong> Post items
        </p>
        <p>
            Yes ! a lot of typed things, but a more robust code, less errors in the future and many more 🙂
        </p>
        <SWrapper>
            <SContent>
                <h2>Overview of typescript</h2>
                <Blog posts={posts}/>
            </SContent>
        </SWrapper>
    </>
);

export default App;
