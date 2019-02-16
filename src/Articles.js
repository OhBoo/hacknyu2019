import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './header';
import TopBar from "./topbar";

const PageTitle = styled.h1`
    margin-left: 3%;
    font-size: 2.5em;
    margin-bottom: 0;
    font-family: Ubuntu;
    font-weight: 700;
`;
const ArticleTitle = styled.h2`
    margin-left: 5%;
    font-family: Ubuntu;
    font-weight: 400;
`;
const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const ArticleDiv = styled.div`
    width: 50%;

`;
const ArticleCaptionDiv = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    
`;
const ArticleContentDiv = styled.div`
    background-color: #eeeeee;
    padding-top 1%;
    padding-bottom: 3%;
`;
const ArticleCaption = styled.h2`
    display: inline-block;
    margin-left: 5%;
    margin-top: 29%;
    font-family: Ubuntu;
    font-weight: 300;
    text-align: center;
`;
const ArticleVidDiv = styled.div`
    margin-left: 5%;
`;
const imgStyle = {
    marginLeft:'5%'
};

export default class Articles extends Component {

    render() {
        return (
            <div>
                <Header/>
                <TopBar/>
<<<<<<< 3cfb19eb30fe40ad936373472b22f3af18ce924a
                <PageTitle>
=======
                <h1>
>>>>>>> lolz
                    Articles
                </PageTitle>
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
                                <i>This is the video explaining sexual consent</i>
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
                                <img style={imgStyle}
                                    src="https://c-5uwzmx78pmca09x24quiomax2eiowziumlqix2ekwu.g00.everydayhealth.com/g00/3_c-5eee.mdmzgligpmitbp.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquioma.iowziumlqi.kwux2fmdmzgligpmitbpx2fokuax2fEpib-Qa-Mumzomvkg-Kwvbzikmx78bqwv-ZU-500f284.rx78ox3fq98k.uizsx3dquiom_$/$/$/$"
                                    width="600" height="400"/>
                        </ArticleContentDiv>
                    </ArticleDiv>
                </ArticleContainer>

            </div>
        )
    }
}