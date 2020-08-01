import React from 'react';
import './Preloader.scss';

const Preloader = () => (
  <div className="Preloader">
      <div className="preloader">
          <div className="centrize full-width">
              <div className="vertical-center">
                  <div className="spinner">
                      <div className="double-bounce1"/>
                      <div className="double-bounce2"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
);

Preloader.propTypes = {};

Preloader.defaultProps = {};

export default Preloader;
