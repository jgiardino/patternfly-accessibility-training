
import React, { Component } from "react";
import {
  DataList,
  DataListItem,
  DataListItemRow,
  Title
} from '@patternfly/react-core';
import { CheckIcon, GripHorizontalIcon } from '@patternfly/react-icons';
import PageLayout from "../components/PageLayout";
import KeyboardScreenReaderBeforeSteps from "../instructions/KeyboardScreenReaderBeforeSteps";

class KeyboardScreenReaderBefore extends Component {
  render() {
    const instructions = <KeyboardScreenReaderBeforeSteps />;
    return (
      <PageLayout before title="Before example for Keyboard and Screen Reader" instructions={instructions}>
        <div className="main-section pf-u-h-100">
          <div className="pf-l-grid pf-u-m-lg">
          <div className="pf-l-grid__item pf-m-6-col pf-u-mr-lg">
            <Title size="lg" headingLevel="h2">
              Featured sundae
            </Title>
          </div>
          <div className="pf-l-grid__item pf-m-6-col">
            <Title size="lg" headingLevel="h2">
              Order of sundaes on menu
            </Title>
          </div>
          <div className="pf-l-grid__item pf-m-6-col pf-u-mr-lg">
            <div className="pf-c-content pf-u-my-md">
              <small>The current featured sundae is <strong>U.S.S Butterscotch</strong></small>
            </div>
            <form className="pf-c-form">
              <div className="pf-c-form__group">
                <label className="pf-c-form__label" htmlFor="featured-sundae">
                  <span className="pf-c-form__label-text">
                    Set featured sundae to
                  </span>
                </label>
                <div className="pf-c-input-group">
                  <select className="pf-c-form-control" id="featured-sundae" name="featured-sundae">
                    <option>Select one</option>
                  </select>
                  <button className="pf-c-button pf-m-secondary" type="submit" aria-label="Save as featured sundae">
                    <CheckIcon />
                  </button>
                </div>
              </div>
              <div className="pf-c-check">
                <input className="pf-c-check__input" type="checkbox" id="check1" name="exampleCheck1" />
                <label className="pf-c-check__label" htmlFor="check1">
                  Set as featured sundae for <strong>today only</strong></label>
              </div>
            </form>
          </div>
          <div className="pf-l-grid__item pf-m-6-col">
            <div className="pf-c-content pf-u-my-md">
              <small>Set the order that sundaes display in the menu.</small>
            </div>
            <DataList aria-label="Simple data list example">
              <DataListItem aria-labelledby="sundae-one">
                <DataListItemRow>
                  <div className="pf-c-data-list__item-control">
                  <div className="pf-c-data-list__toggle">
                    <button className="pf-c-button pf-m-plain" type="button">
                      <GripHorizontalIcon />
                    </button>
                  </div>
                </div>
                  <div className="pf-c-data-list__item-content">
                    <div className="pf-c-data-list__cell" id="sundae-one">
                      Sundae one
                    </div>
                  </div>
                  <div className="pf-c-data-list__item-action">
                    <div className="pf-c-data-list__action">
                    </div>
                  </div>
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="sundae-two">
                <DataListItemRow>
                  <div className="pf-c-data-list__item-control">
                  <div className="pf-c-data-list__toggle">
                    <button className="pf-c-button pf-m-plain" type="button">
                      <GripHorizontalIcon />
                    </button>
                  </div>
                </div>
                  <div className="pf-c-data-list__item-content">
                    <div className="pf-c-data-list__cell" id="sundae-two">
                      Sundae two
                    </div>
                  </div>
                  <div className="pf-c-data-list__item-action">
                    <div className="pf-c-data-list__action">
                    </div>
                  </div>
                </DataListItemRow>
              </DataListItem>
              <DataListItem aria-labelledby="sundae-three">
                <DataListItemRow>
                  <div className="pf-c-data-list__item-control">
                  <div className="pf-c-data-list__toggle">
                    <button className="pf-c-button pf-m-plain" type="button">
                      <GripHorizontalIcon />
                    </button>
                  </div>
                </div>
                  <div className="pf-c-data-list__item-content">
                    <div className="pf-c-data-list__cell" id="sundae-three">
                      Sundae three
                    </div>
                  </div>
                  <div className="pf-c-data-list__item-action">
                    <div className="pf-c-data-list__action">
                    </div>
                  </div>
                </DataListItemRow>
              </DataListItem>
            </DataList>
          </div>
        </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default KeyboardScreenReaderBefore;