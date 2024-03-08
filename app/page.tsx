import React from "react";
import Pagination from "./components/Pagination";

const page = () => {
  return <Pagination itemCount={100} pageSize={10} currentPage={1} />;
};

export default page;
