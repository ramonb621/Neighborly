import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "../../components/Grid";
import { Link, Redirect } from "react-router-dom";
import { Music } from "../../components/Music";
import { Connections } from "../../components/ConnectionsBox"

class Profile extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <div className="image"></div>
                <Connections />
                <Music />
            </Container>
        );
    }
}

export default Profile;