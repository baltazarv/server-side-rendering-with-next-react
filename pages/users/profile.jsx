import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import axios from 'axios';

const Profile = props => {
  console.log('user', props.user)

  const showUser = user => (
    <div>
      <div>username: {user.username}</div>
      <div>email: {user.email}</div>
    </div>
  )
  return (
    <>
      <MainLayout>
        <h2>{props.user.name}</h2>
          {showUser(props.user)}
      </MainLayout>
    </>
  )
}

Profile.getInitialProps = async ({query}) => {
  let user;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
    user = response.data;
    console.log('query', query, 'user', user)
  } catch(error) {
    console.log('error', error)
  }
  return { user };
}

export default Profile;
