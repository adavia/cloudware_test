import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import { userStore } from './stores/UserStore';
import { uiStore } from './stores/UIStore';

class Index extends React.Component {
    render() {
        return (
            <Provider userStore={userStore} uiStore={uiStore}>
                <App />
            </Provider>
        );
    }
};

ReactDOM.render(<Index />, document.getElementById('root'));