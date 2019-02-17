import React, {Component} from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Discuss from "./assets/smb-discussion-panel-og.jpg"

const Title = styled.h1`
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
const ResourceContainer = styled.div`
      display: flex;
    flex-direction: row;
    background-color: #ffffff;
`;
const ResourceDiv = styled.div`
    width: 50%;
`;
const ResourceContentDiv = styled.div`
    padding-top 1%;
    padding-bottom: 3%;
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
const PageContainer = styled.div`
background-color: #eeeeee;
padding: 1%;
padding-bottom: 1%;
`;
const ImgStyle = styled.img`
    margin-left: 16%;
    width:100%;
    height:90%;
    overflow: hidden;
`;

export default class Forum extends Component {


    render() {
        return (
            <div>
                <Header/>
                <Title>
                    Questions? Ask them here.
                </Title>
                <PageContainer>
                    <ResourceContainer>
                        <ResourceContentDiv>
                            <ResourceTitle>Enter The Forum</ResourceTitle>
                            <Grid style={{maxWidth: '90%'}} container spacing={16}>
                                <Resource>
                                    <a href="http://localhost:4567/"
                                      target="_blank">
                                        <ImgStyle src={Discuss}/>
                                    </a>
                                </Resource>
                            </Grid>
                        </ResourceContentDiv>
                    </ResourceContainer>
                </PageContainer>
            </div>


        );
    }
}
