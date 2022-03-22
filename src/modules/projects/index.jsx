import React from "react";
import Header from "modules/homepage/components/header/header.component";
import Footer from "modules/homepage/components/footer/footer.component";

import Table from "core/components/table/table.component";

import { Styles, Container, Body } from "./styles";

const Index = () => {
  const data = [
    {
      year: "12/16/29",
      title: "Wes",
      made_at: "gordo",
      built_with: ["React", "Typescript"],
      links: []
    },
    {
      created_at: "12/16/29",
      title: "Wes",
      author_name: "gordo",
    },
  ];
  const columns = [
    {
      title: "Data de criação",
      dataIndex: "created_at",
    },
    { title: "Titulo", dataIndex: "title" },
    { title: "Autor", dataIndex: "author_name" },
  ];
  return (
    <Styles>
      <Container>
        <Header></Header>
        <Body>
          <h1>All projects created</h1>
          <h4>A huge list of projects I've created over my time</h4>
          <Table
            columns={columns}
            data={data}
            pagination={false}
            dataLimit={999999999}
          ></Table>
        </Body>
      </Container> 
    </Styles>
  );
};

export default Index;
