import React from 'react';

function MyApp({ Component, pageProps }) {
  // getIntialProps props from children components
  console.log('pageProps', pageProps);

  // pass variables to all children
  const clinics = {
    tnc: { title: 'Tuesday Night' },
    nj: { title: 'NJ' },
    youth: { title: 'Qlinic' },
  };

  return <Component {...pageProps} clinics={clinics} />;
}

export default MyApp;
