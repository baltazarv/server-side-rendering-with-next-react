import React, { useEffect } from 'react';
import Router from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';
import Message from '../../components/includes/Message';

const Clinics = () => {

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

    Router.replace('/clinics', '/clinics?clinic=tnc');
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
