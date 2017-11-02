import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const animate = (val) => spring(val, {
  stiffness: 28,
  damping: 40
});

class Home extends Component {
  render() {
    return (
      <div className='segmenter'>
          <div className='segmenter_body'>
            <Motion
              defaultStyle={{
                letterSpacing: 31,
                opacity: 0
              }} style={{
                letterSpacing: animate(12),
                opacity: animate(1)
              }}>
              {({ letterSpacing, opacity }) => 
                <div style={{
                  letterSpacing,
                  opacity
                }}>
                <h1>WELCOME</h1>
                <h2><Link to='/menu'>Visit our MENU</Link></h2>
                </div> 
              }
            </Motion>
          </div>
      </div>
    );
  }
}
export default Home
