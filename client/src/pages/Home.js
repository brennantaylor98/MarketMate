import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../components/assets/pic1.png';
import pic3 from '../components/assets/pic3.jpg';
import pic4 from '../components/assets/pic4.jpg';
import pic5 from '../components/assets/pic5.jpg';
import pic6 from '../components/assets/pic6.jpg';
import pic7 from '../components/assets/pic7.webp';

const Home = () => {
  return (
    <main>
      <main style={{ paddingTop: '100px' }}></main>
      <div className="container my-2">
        <div className="flex-row justify-center">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '33%', height: '300px' }}>
              <img src={pic7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/createPost" className="floating-button">
        Create <br />
        Post
      </Link>
    </main>
  );
};

export default Home;