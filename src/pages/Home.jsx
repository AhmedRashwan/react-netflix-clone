import React, { Fragment } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <Fragment>
      <Main />
      <Row rowId="1" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row rowId="4" title="Trending" fetchUrl={requests.requestTrending} />
    </Fragment>
  );
};

export default Home;
