import React from "react";
import TopNav from "../Classroom/TopNav/TopNav";
import MyLibraryBooks from "./MyLibraryBooks/MyLibraryBooks";
import FeaturedBook from "./MyLibraryBooks/FeaturedBook";

const MyLibrary = () => {
  return (
    <div>
      <TopNav />
      <div>
        <FeaturedBook />
        <MyLibraryBooks />
      </div>
    </div>
  );
};

export default MyLibrary;
