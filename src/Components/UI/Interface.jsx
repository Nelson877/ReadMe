import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Hero from "./Hero";
import Nav from "./Nav";

const Interface = () => {
  const [isLoading, setLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Existing Navbar (unchanged) */}
      <Nav />

      {/* Hero Section (unchanged) */}

      <Hero />

    </div>
  );
};

export default Interface;
