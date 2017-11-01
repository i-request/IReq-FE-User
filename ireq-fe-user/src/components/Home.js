import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const animate = (val) => spring(val, {
  stiffness: 28,
  damping: 40
});

class Home extends Component {
  constructor(props) {
    super(props);
  }
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
                <h1 style={{
                  letterSpacing,
                  opacity
                }}>WELCOME</h1> 
              }
            </Motion>
          </div>
      </div>
    );
  }
}
export default Home
