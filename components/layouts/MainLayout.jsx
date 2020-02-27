import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Header from '../includes/Header';
import '../../scss/styles.scss';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>LGBT Bar NY</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="main-layout container">
        <Header />
        {children}
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
