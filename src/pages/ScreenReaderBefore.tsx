import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
import DataViewScreenReaderBefore from "../components/DataViewScreenReaderBefore";
import PageLayout from "../components/PageLayout";
import ScreenReaderBeforeSteps from "../instructions/ScreenReaderBeforeSteps";

class ScreenReaderBefore extends Component {
  render() {
    const instructions = <ScreenReaderBeforeSteps />;
    return (
      <PageLayout before title="Before example for Keyboard and Screen Reader" instructions={instructions}>
        <div className="pf-l-stack main-section pf-u-h-100" >
          <div className="pf-l-stack__item pf-u-p-lg">
            <nav className="pf-c-tabs" id="primary">
              <button className="pf-c-tabs__scroll-button" aria-label="Scroll left">
                <i className="fas fa-angle-left" aria-hidden="true"></i>
              </button>
              <ul className="pf-c-tabs__list">
                <li className="pf-c-tabs__item pf-m-current">
                  <button className="pf-c-tabs__button" id="primary-tab1">
                    Sundaes
                  </button>
                </li>
                <li className="pf-c-tabs__item">
                  <button className="pf-c-tabs__button" id="primary-tab2">
                    Milkshakes
                  </button>
                </li>
              </ul>
              <button className="pf-c-tabs__scroll-button" aria-label="Scroll right">
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </button>
            </nav>
            <nav className="pf-c-breadcrumb pf-u-my-md">
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
                  <a href="#" className="pf-c-breadcrumb__link pf-m-current" aria-current="page">
                    U.S.S Butterscotch
                  </a>
                </li>
              </ol>
            </nav>
            <div className="pf-c-content">
              <small>Set sail with this nautically-themed 3-scoop sundae, featuring U.S.S. Butterscotch ice cream and waffle sails!</small>
            </div>
          </div>
          <div className="pf-l-stack__item pf-m-fill data-view pf-u-p-lg">
            <DataViewScreenReaderBefore />
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default ScreenReaderBefore;