import React from "react";
import { default as NextHead } from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>Biblioteca IBCL</title>
      <meta name="description" content="Biblioteca IBCL" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;