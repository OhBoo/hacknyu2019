import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "./header";
import Teens from "./assets/teensnyc.jpg";
import HMI from "./assets/hmi.jpg";
import PP from "./assets/PP.jpg";
import Education from "./assets/education.jpg";

const Title = styled.h1`
    padding-left: 2%;
    font-size: 2em;
    margin-bottom: 0;
    font-family: Ubuntu;
    font-weight: 500;
    background-color:#eeeeee;
    color: #001e3b;
`;
const ResourceTitle = styled.h2`
    margin-left: 5%;
    font-family: Ubuntu;
    font-weight: 500;
    color: #001e3b;
`;
const Resource = styled.h2`
font-size: 25px;
`;
const ResourceContainer = styled.div`
      display: flex;
    flex-direction: row;
    background-color: #EEEEEE;
`;
const ResourceDiv = styled.div`
    width: 50%;
`;
const ResourceCaptionDiv = styled.div`
   text-align: center;
    width: 100%;
    height: 100%;
    background-color: #3eb1cb;
`;
const ResourceContentDiv = styled.div`
    padding-top 1%;
    padding-bottom: 3%;
`;
const ResourceCaption = styled.h2`
    display: inline-block;
    font-family: Ubuntu;
    font-weight: 300;
    font-size: 2em;
    text-align: center;
`;
const ImgStyle = styled.img`
    margin-left: 8%;
    width:80%;
    height:60%;
    overflow: hidden;

`;
const PageContainer = styled.div`
background-color: #eeeeee;
padding: 1%;
padding-bottom: 1%;
`;
export default class Resources extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Title>
                    <u>Resources</u>
                </Title>
                <PageContainer>
                    <ResourceContainer>
                            <ResourceContentDiv>
                                <ResourceTitle> Teen Clinics </ResourceTitle>
                                    <Resource>
                                        <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/std/teens-clinics.pdf"
                                           target="_blank"
                                           rel="noopener noreferrer" >
                                            <ImgStyle src={Teens}/>
                                        </a>
                                    </Resource>
                            </ResourceContentDiv>

                        <ResourceDiv>
                            <ResourceCaptionDiv>
                                <ResourceCaption>
                                    <i>Looking for sexual health resources in NYC? Start here.</i>
                                </ResourceCaption>
                            </ResourceCaptionDiv>
                        </ResourceDiv>
                    </ResourceContainer>

                    <ResourceContainer> 
                        <ResourceDiv>
                            <ResourceCaptionDiv>
                                <ResourceCaption>
                                    <i>Services for LGBTQ youth in New York and New Jersey</i>
                                </ResourceCaption>
                            </ResourceCaptionDiv>
                        </ResourceDiv>

                        <ResourceDiv>
                            <ResourceContentDiv>
                                <ResourceTitle>The Hetrick-Martin Institute</ResourceTitle>
                                    <Resource>
                                        <a href="https://hmi.org/" target="_blank" rel="noopener noreferrer">
                                            <ImgStyle src={HMI}/>
                                        </a>
                                </Resource>
                            </ResourceContentDiv>
                        </ResourceDiv>  
                    </ResourceContainer>

                    <ResourceContainer>
                        <ResourceDiv>
                            <ResourceContentDiv>
                                <ResourceTitle>Planned Parenthood</ResourceTitle>
                                <Resource>
                                    <a href="https://www.plannedparenthood.org/online-tools/what-right-birth-control-me"
                                       target="_blank" rel="noopener noreferrer">
                                        <ImgStyle src={PP}/>
                                    </a>
                                </Resource>
                            </ResourceContentDiv>
                        </ResourceDiv>

                        <ResourceDiv>
                            <ResourceCaptionDiv>
                                <ResourceCaption>
                                    <i>Questions about birth control? Don't know what's right for you? Here are your answers.</i>
                                </ResourceCaption>
                            </ResourceCaptionDiv>
                        </ResourceDiv>
                    </ResourceContainer>

                    <ResourceContainer>
                        <ResourceDiv>
                            <ResourceCaptionDiv>
                                <ResourceCaption>
                                    <i>A sex educator with decades of experience providing workshops and coaching</i>
                                </ResourceCaption>
                            </ResourceCaptionDiv>
                        </ResourceDiv>

                        <ResourceDiv>
                            <ResourceContentDiv>
                                <ResourceTitle>Cindy Lee Alves</ResourceTitle>
                                <Resource>
                                    <a href="https://www.cindyleealves.com/" target="_blank" rel="noopener noreferrer">
                                        <ImgStyle src={Education}/>
                                    </a>
                                </Resource>
                            </ResourceContentDiv>
                        </ResourceDiv>
                    </ResourceContainer>
                </PageContainer>
            </div>
        )
    }
}
