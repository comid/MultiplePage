import {render} from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';
import Info from './info';
import "./style/index.less";

class Index extends React.Component {
    render() {
        return (
            <div>
                    <div>首页link</div>

                <a href="/about">关于我们a</a>

                <Link to='/info'>
                    <div>详细信息link</div>
                </Link>
                <a href="/mobx">mobx</a>
            </div>
        );
    }
}


Index.contextTypes = {
    router: PropTypes.object.isRequired
};

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Index}/>
            <Route path="/info" component={Info}/>
        </Router>
    ),
    document.getElementById('app')
);
