import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


const Profile = () => {
  const title = localStorage.getItem('title')
  const price = localStorage.getItem('price')


  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Hol' up</div>;
  }

  if (!user?.username) {
    return (
      <div style={{ border: '2px solid black', textAlign: 'center', marginTop: '50vh' }}>
        <h1>You must log in to see this.</h1>
      </div>
    );
  }


  return (
    <div style= {{ height:'500px' }}>
      <main style={{ paddingTop: '100px' }}>
      <h2>Recently Liked Items</h2>
      <div className="card postsCard" >
        <div>
          <h2 className="postTitle">{title}</h2>
          <p className="postPrice">{price}</p>
        </div>
      </div>
      </main>
      <main style={{ paddingTop: '100px' }}>
      <h2>Selling</h2>
    <div style={{ border: '1px solid black', padding: '150px'}}>
    <Link to="/createpost" className="floating-button">
        Create <br />
        Post
      </Link>
    </div>
    </main>
  </div>

  
  );
};

export default Profile;