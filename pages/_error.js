import React from "react";
import Router from "next/router";

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  if (res) {
    res.writeHead(302, {
      Location: `/`
    });
    res.end();
  } else {
    Router.push(`/`);
  }
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
