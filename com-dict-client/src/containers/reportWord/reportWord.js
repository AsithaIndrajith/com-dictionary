import React from "react";
import "../home/home.css";
import { Layout } from "antd";
import TitleBar from "../../components/Header";
import FlagWord from "../../components/Flag";
import FooterPage from "../../components/Footer/FooterPage";

const { Header, Footer, Content } = Layout;

function reportWord(props) {
  return (
    <Layout>
      <Header className="title_bar">
        <TitleBar />
      </Header>
      <Content className="body">
        <FlagWord data={props.history.location.state.data} />
      </Content>
      <Footer className="footer_div">
        <FooterPage />
      </Footer>
    </Layout>
  );
}

export default reportWord;
