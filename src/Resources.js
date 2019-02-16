import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "./header";
import TopBar from "./topbar";

const Title = styled.h1`
font-size: 35px;
`;
const Resource = styled.h2`
font-size: 25px;
`;

export default class Resources extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <Title>
                    Connecting YOU with the Resources YOU Need
                </Title>

                <Resource>
                    <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/std/teens-clinics.pdf">Teen Clinics</a>
                </Resource>
                <Resource>
                    <a href="https://hmi.org/">Hetrick-Martin Institute</a>
                </Resource>
                <Resource>
                    <a href="https://www.plannedparenthood.org/online-tools/what-right-birth-control-me">Planned Parenthood</a>
                </Resource>
                <Resource>
                    <a href="https://heyepiphora.com/">Hey Epiphora</a>
                </Resource>
                <Resource>
                    <a href="https://vaginaantics.com/vagina-antics-blog/">Vagina Antics</a>
                </Resource>
                <Resource>
                    <a href="https://www.cindyleealves.com/">Cindy Lee Alves</a>
                </Resource>
            </div>
        )
    }
}
