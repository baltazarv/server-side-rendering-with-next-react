import React from 'react';
import { withRouter } from 'next/router';

const Message = ({ router }) => {
  const handleClick = () => {
    router.push({
      pathname: '/users/profile',
      query: { userId: 1 },
    }, '/users/profile/1');
  };
  return (
    <>
      <div>
        {'Route: '}
        {router.pathname}
      </div>
      <br />
      <div>
        <button onClick={handleClick} type="button">Redirect to User Profile</button>
      </div>
    </>
  );
};

export default withRouter(Message);
