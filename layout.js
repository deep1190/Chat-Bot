import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <title>{props.pageTitle || 'Realtime Chat'}</title>
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;
