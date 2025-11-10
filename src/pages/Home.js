import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpg';
import '../styles/HomeStyles.css';



const Home = () => {
  return (
    <Layout>
      <div>
        <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
          <div className='headerContainer'>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' ,fontFamily: 'roboto'}}>
              Food Website
            </h1>
            <p>
              Best food waiting for your belly
            </p>
            <Link to="/menu">
            
        <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', fontSize: '20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          ORDER NOW
        </button>
            </Link>
          </div>
        </div>
        <h1>
       
        </h1>
      </div>
    </Layout>
  )
}

export default Home;