import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'http://homestead.test/verification',
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
        return function (e) {
            let state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        let data = {
            login: this.state.login,
            password: this.state.password,
        }

        let httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }

        httpRequest.open('POST', this.state.baseUrl);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(JSON.stringify(data));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    login: <br/>
                    <input type="text" value={this.state.login} onChange={this.handleChange('login')}/>
                </label>
                <label>
                    password: <br/>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}

ReactDOM.render(<Login/>, document.getElementById('login'));
