import React from "react";
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;


var StyledDiv = styled.div`
    background-color: #eee;
    margin: 0 auto;
    box-shadow: 0 1px 6px #ccc;
    border: solid 1px #fff;
    margin-right: 1%;
    margin-left: 1%;
`;

const Body = (props) => (
    <StyledDiv>
        <Layout>
            <Content style={{ margin: '0 16px' }}>
                {props.children}
            </Content>
        </Layout>
    </StyledDiv>
);
  
export default Body;