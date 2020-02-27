import React, { useEffect } from 'react';
import Router from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';
import Message from '../../components/includes/Message';

const Clinics = ({ clinics }) => {

  // console.log(Router);
  // console.log(Router.pathname);

  useEffect(() => {
    // when hit the back button
    //   Router.beforePopState(({ url, as, options }) => {
    //     if (as === '/clinics') {
    //       // forces a reload
    //       window.location.href = as;
    //       return false;
    //     }
    //     return true;
    //   });

    // Router.replace('/clinics', '/clinics?clinic=tnc');

    // get props from _app
    console.log(clinics);

    // register for router events
    const handleRouteStart = (url) => {
      console.log('App changing routes > ', url);
    };
    const handleRouteComplete = (url) => {
      console.log('App changed route > ', url);
    };

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      // unsubscribe to eents
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteComplete);
    };
  });

  return (
    <>
      <MainLayout>
        <h2>Clinics</h2>
        <Message />
        <br />
        <button onClick={() => Router.push('/')} type="button">Go Home</button>
      </MainLayout>
    </>
  );
};

export default Clinics;
