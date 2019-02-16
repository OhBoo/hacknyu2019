import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './header';
import TopBar from "./topbar";

const PageTitle = styled.h1`
    margin-left: 3%;
`;


const ArticleImg = styled.img`

`;
const ArticleVidDiv = styled.div`
    margin-left: 3%;
    padding-left: 2%;
    font-size: 2.5em;
    margin-bottom: 0;
    font-family: Ubuntu;
    font-weight: 500;
    background-color:#eeeeee;
    margin-top: 0;
    padding-top: 1%;
    color: #001e3b;
`;
const ArticleTitle = styled.h2`
    margin-left: 5%;
    font-family: Ubuntu;
    font-weight: 500;
    color: #001e3b;
`;
const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ffffff;

`;
const ArticleDiv = styled.div`
    width: 50%;
`;
const ArticleCaptionDiv = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #3eb1cb;
 
  
`;
const ArticleContentDiv = styled.div`
    
    padding-top 1%;
    padding-bottom: 3%;
`;
const ArticleCaption = styled.h2`
    display: inline-block;
    margin-left: 5%;
    margin-top: 29%;
    font-family: Ubuntu;
    font-weight: 300;
    font-size: 2em;
    text-align: center;
    
`;

const imgStyle = {
    marginLeft: '5%'
};
const PageContainer = styled.div`
background-color: #eeeeee;
padding: 1%;
padding-bottom: 5%;
`;

export default class Articles extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>

                <h1>
                    Articles
                </h1>
                <ArticleTitle>Tea Consent</ArticleTitle>
                <ArticleVidDiv>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/oQbei5JGiT8" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                </ArticleVidDiv>
                <PageTitle>
                    Articles
                </PageTitle>
                <PageContainer>
                <ArticleContainer>
                    <ArticleDiv>
                        <ArticleContentDiv>
                            <ArticleTitle>Tea Consent</ArticleTitle>
                            <ArticleVidDiv>
                                <iframe width="600" height="400" src="https://www.youtube.com/embed/oQbei5JGiT8"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </ArticleVidDiv>
                        </ArticleContentDiv>
                    </ArticleDiv>

                    <ArticleDiv>
                        <ArticleCaptionDiv>
                            <ArticleCaption>
                                <i>Consent is as simple as a cup of tea.</i>
                            </ArticleCaption>
                        </ArticleCaptionDiv>
                    </ArticleDiv>
                </ArticleContainer>
                <ArticleContainer>
                    <ArticleDiv>
                        <ArticleCaptionDiv>
                            <ArticleCaption>
                                <i>Read up on the latest articles</i>
                            </ArticleCaption>
                        </ArticleCaptionDiv>
                    </ArticleDiv>
                    <ArticleDiv>
                        <ArticleContentDiv>
                            <ArticleTitle>What is Emergency Contraception?</ArticleTitle>
                            <a href = "https://www.everydayhealth.com/birth-control/emergency-contraception/" target="_blank">
                            <img style={imgStyle}

                                 src="https://c-5uwzmx78pmca09x24quiomax2eiowziumlqix2ekwu.g00.everydayhealth.com/g00/3_c-5eee.mdmzgligpmitbp.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquioma.iowziumlqi.kwux2fmdmzgligpmitbpx2fokuax2fEpib-Qa-Mumzomvkg-Kwvbzikmx78bqwv-ZU-500f284.rx78ox3fq98k.uizsx3dquiom_$/$/$/$"
                                 width="600" height="400"/>
                            </a>
                        </ArticleContentDiv>
                    </ArticleDiv>
                </ArticleContainer>
                </PageContainer>
            </div>
        )
    }
}