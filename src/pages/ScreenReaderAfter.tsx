import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
import DataViewScreenReaderAfter from "../components/DataViewScreenReaderAfter";
import PageLayout from "../components/PageLayout";
import ScreenReaderAfterSteps from "../instructions/ScreenReaderAfterSteps";

class ScreenReaderAfter extends Component {
  render() {
    const instructions = <ScreenReaderAfterSteps />;
    return (
      <PageLayout title="After example for Keyboard and Screen Reader" instructions={instructions}>
        <div className="pf-l-stack main-section pf-u-h-100" >
          <div className="pf-l-stack__item pf-u-p-lg">
            <nav className="pf-c-tabs" id="primary" aria-label="Local">
              <button className="pf-c-tabs__scroll-button" aria-label="Scroll left">
                <i className="fas fa-angle-left" aria-hidden="true"></i>
              </button>
              <ul className="pf-c-tabs__list">
                <li className="pf-c-tabs__item pf-m-current">
                  <a href="#" className="pf-c-tabs__button" id="primary-tab1">
                    Sundaes
                  </a>
                </li>
                <li className="pf-c-tabs__item">
                  <a href="#" className="pf-c-tabs__button" id="primary-tab2">
                    Milkshakes
                  </a>
                </li>
              </ul>
              <button className="pf-c-tabs__scroll-button" aria-label="Scroll right">
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </button>
            </nav>
            <nav className="pf-c-breadcrumb pf-u-my-md" aria-label="breadcrumb">
              <ol className="pf-c-breadcrumb__list">
              <li className="pf-c-breadcrumb__item">
                  <a href="#" className="pf-c-breadcrumb__link">
                    Sundaes
                  </a>
                  <span className="pf-c-breadcrumb__item-divider">
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                </li>
                <li className="pf-c-breadcrumb__item">
                  <h2 className="pf-c-breadcrumb__heading">
                    <a href="#" className="pf-c-breadcrumb__link pf-m-current" aria-current="page">
                      U.S.S Butterscotch
                    </a>
                  </h2>
                </li>
              </ol>
            </nav>
            <div className="pf-c-content">
              <small>Set sail with this nautically-themed 3-scoop sundae, featuring U.S.S. Butterscotch ice cream and waffle sails!</small>
            </div>
          </div>
          <div className="pf-l-stack__item pf-m-fill data-view pf-u-p-lg">
            <DataViewScreenReaderAfter />
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default ScreenReaderAfter;