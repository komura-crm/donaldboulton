import React from "react";
import Header from "gatsby-theme-document/src/components/header";
import Search from "../../src/components/Search";

export default props => {

  return (
    <Search>
      <Header {...props} />
    </Search>
  );
};