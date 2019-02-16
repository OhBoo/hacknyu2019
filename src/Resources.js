import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "./header";
import TopBar from "./topbar";

const Title = styled.h1`
margin-left: 3%;
font-size: 2.5em;
margin-bottom: 0;
font-family: Ubuntu;
font-weight: 700;
`;
const ResourceTitle = styled.h2`
    margin-left: 5%;
    font-family: Ubuntu;
    font-weight: 400;
`;
const Resource = styled.h2`
font-size: 25px;
`;
const ResourceContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const ResourceDiv = styled.div`
    width: 50%;
`;
const ResourceCaptionDiv = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
`;
const ResourceContentDiv = styled.div`
    background-color: #eeeeee;
    padding-top 1%;
    padding-bottom: 3%;
`;
const ResourceCaption = styled.h2`
    display: inline-block;
    margin-left: 5%;
    margin-top: 29%;
    font-family: Ubuntu;
    font-weight: 300;
    text-align: center;
`;
const imgStyle = {
    marginLeft:'5%'
};

export default class Resources extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
                <Title>
                    Resources
                </Title>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>Teen Clinics</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://www1.nyc.gov/assets/doh/downloads/pdf/std/teens-clinics.pdf"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>

                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Information Regarding Sexual Health Clinics for Teens</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                </ResourceContainer>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Services for LGBTQ Youth in NY and NJ</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>The Hetrick-Martin Institute</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://hmi.org/"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>
                </ResourceContainer>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>Panned Parenthood</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://www.plannedparenthood.org/online-tools/what-right-birth-control-me"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>

                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Planned Parenhood Information</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                </ResourceContainer>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Inclusive Sex Toy Information and Resources</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>Hey Epiphora</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://heyepiphora.com/"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>
                </ResourceContainer>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>Vagina Antics</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://vaginaantics.com/vagina-antics-blog/"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>

                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Vagina Antics Information</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                </ResourceContainer>
                <ResourceContainer>
                    <ResourceDiv>
                        <ResourceCaptionDiv>
                            <ResourceCaption>
                                <i>Cindy Lee Alves Information</i>
                            </ResourceCaption>
                        </ResourceCaptionDiv>
                    </ResourceDiv>
                    <ResourceDiv>
                        <ResourceContentDiv>
                            <ResourceTitle>Cindy Lee Alves</ResourceTitle>
                            <Resource>
                                <iframe width="600" height="400" src="https://www.cindyleealves.com/"
                                    frameBorder="0">
                                </iframe>
                            </Resource>
                        </ResourceContentDiv>
                    </ResourceDiv>
                </ResourceContainer>
            </div>
        )
    }
}
