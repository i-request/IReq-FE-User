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
    this.state = {
      boxes: [
        {
          top: 12,
          left: 70,
          width: 20,
          height: 10
        },
        {
          top: 12,
          left: 6,
          width: 30,
          height: 75
        },
        {
          top: 75,
          left: 15,
          width: 45,
          height: 20
        },
        {
          top: 30,
          left: 30,
          width: 60,
          height: 40
        },
        {
          top: 20,
          left: 80,
          width: 20,
          height: 60
        }
      ]
    }
  }
  render() {
    return (
      <div className='segmenter'>
        <div className='segmenter_background'>
          <div className='segmenter_pieces' style={{
            perspective: '500px'
          }}>
            {this.state.boxes.map(({ top, left, width, height }, i) =>
              <Motion key={i} defaultStyle={{ z: 0 }} style={{ z: animate(30) }}>
                {({ z }) =>
                  <div className="segmenter_wrap" style={{
                    transform: `translateZ(${z}px)`
                  }}>
                    <Motion defaultStyle={{ opacity: 0 }} style={{
                      opacity:
                      animate(1)
                    }}>
                      {({ opacity }) =>
                        <div className='segmenter_shadow' style={{
                          top: `${top}%`,
                          left: `${left}%`,
                          width: `${width}%`,
                          height: `${height}%`,
                          opacity
                        }}></div>
                      }
                    </Motion>
                    <div className='segmenter_box' style={{
                      clipPath: 'polygon(70% 8%, 95% 8%, 95% 25%, 70% 25%)'
                    }}></div>
                  </div>
                }
              </Motion>
            )}
          </div>
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
      </div>
    );
  }
}
export default Home
