import React from 'react';
import "../css/home.css";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';


class Home extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderlogin = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
            <>
                {this.renderlogin()}
                <main>
                    <section class="stage">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage2">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball2 bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage3">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball3 bubble"></figure>
                        </Link>
                    </section>
                    <section class="stage4">
                        <Link onClick={this.setRedirect}>
                            <figure class="ball4 bubble"></figure>
                        </Link>
                    </section>
                    <button class="signin" type="button" onClick={this.setRedirect}>Sign In</button>
                </main>
                <script src="app.js"></script>
            </>
        )
    }
}

export default Home;




