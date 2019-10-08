import styled from 'styled-components';
import { Container, Flex } from 'rebass';

export const ContainerCustom = styled(Container)`
  margin: 0 auto;
  padding-left: 22px;
  padding-right: 22px;
  width: 1024px;
  position: relative;
`;

export const ContainerCustomMobile = styled(Container)`
  margin: 0 auto;
  padding-left: 22px;
  padding-right: 22px;
  width: auto;
  position: relative;
`;

export const MainContent = styled.div`
  padding: 20px 0 60px;
  background-color: #f7f7f7;
`;

export const MainDesktop = styled(Flex)`
  margin: 0 -5px;
  padding-bottom: 50px;
`;

export const Aside = styled.aside`
  width: 10%;
  min-height: 100vh;
  padding: 10px;
  background-color: #f6f7f8;
  min-width: 160px;
  float: left;
`;

export const PageContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  flex: 1;
  min-height: 100vh;
  padding: 2.5em 1.5em;
  overflow: hidden;
`;

export const Common = styled.span`
  background: #000;
`;
