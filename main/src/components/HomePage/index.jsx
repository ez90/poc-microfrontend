import React from "react";
import {SContent} from './styles';


const HomePage = () => (
    <SContent>
        <h1>Micro content architecture HOW ? 🚀</h1>
        <div>
            <p>
                This repo is used as a POC (proof of concept) for usage of a micro-frontend architecture (managing
                several front applications) that
                suites to a human feature team organization.
            </p>
            <h2>Goal considerations</h2>
            <ul>
                <li>Create as many <i>featured applications</i> (SPA) as required.</li>
                <li>One <i>main application</i> will handle all the <i>featured applications</i>.</li>
                <li>All applications live in the same repository (MonoRepo).</li>
                <li>A global state is accessible through all the <i>featured applications</i> but a <i>featured
                    application</i> could have his own internal state.
                </li>
                <li>A global route handle by the <i>main application</i> and the possibility for <i>featured
                    applications</i> to
                    have their own router.
                </li>
            </ul>
            <h2>What will be used ?</h2>
            <h3>Rush (<a target="_blank" rel="noreferrer" href="https://rushjs.io/">https://rushjs.io/</a>)</h3>
            <p>
                Rush will be in charge of packages management, on this
                project, the
                main
                goal is to share
                common packages between applications and by the way reduce the whole project size.
            </p>
            <h3>React (<a target="_blank" rel="noreferrer" href="https://fr.reactjs.org/">https://fr.reactjs.org/</a>)</h3>
            <p>
                All applications are written with React.
            </p>
            <h3>Webpack (<a target="_blank" rel="noreferrer" href="https://webpack.js.org/">https://webpack.js.org/</a>)</h3>
            <p>
                Webpack make it possible with help of
                module-federation plugin to expose our `featured applications` to the `main application` and give us
                the possibility to use `featured applications` as a React component for `main application`
            </p>


            <h2>Our example: 4 applications</h2>
            <ul>
                <li><strong>main</strong> is the <i>main application</i> using exposed <i>featured applications</i>. It has a
                    router
                    and a redux
                    store.
                </li>
                <li><strong>account</strong> is a <i>featured application</i>. It has access to <i>main application</i> redux
                    store
                    and has his own
                    redux store.
                </li>
                <li><strong>product</strong> is a <i>featured application</i>. It has his own router.</li>
                <li><strong>blog</strong> is a <i>featured application</i>. it uses Typescript</li>
            </ul>
        </div>
    </SContent>
);

export default HomePage;