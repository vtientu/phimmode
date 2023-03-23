import React from "react";
import Sidebar from "../../Component/Admin/Sidebar";
import Content from "./Content";

const ListCategory = () => {
  return (
    <>
      <div className="row d-flex" style={{ maxWidth: "100%" }} id="body-row">
        <Sidebar />
        <Content/>
      </div>
    </>
  );
};

export default ListCategory;
