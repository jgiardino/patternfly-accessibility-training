import React, { Component } from "react";
import {
  DataList,
  DataListItem,
  DataListItemRow,
  Title
} from '@patternfly/react-core';
import { CheckIcon, GripHorizontalIcon, AngleDownIcon, AngleUpIcon } from '@patternfly/react-icons';
import PageLayout from "../components/PageLayout";
import UpDownKeyboardScreenRdrAfter from "../components/UpDownKeyboardScreenRdrAfter"
import KeyboardScreenReaderAfterSteps from "../instructions/KeyboardScreenReaderAfterSteps";

class KeyboardScreenReaderAfter extends Component {
  render() {
    const instructions = <KeyboardScreenReaderAfterSteps />;
    return (
      <PageLayout before title="Before example for Keyboard and Screen Reader" instructions={instructions}>
        <div className="main-section pf-u-h-100">
          <div className="pf-l-grid pf-m-gutter pf-u-p-lg">
            <div className="pf-l-grid__item pf-m-6-col">
              <div className="pf-c-card">
                <div className="pf-c-card__header">
                  <Title size="lg" headingLevel="h2">
                    Featured sundae
                  </Title>
                </div>
                <div className="pf-c-card__body">
                  <div className="pf-c-content pf-u-mb-md">
                    <small>The current featured sundae is <strong>U.S.S Butterscotch</strong></small>
                  </div>
                  <form className="pf-c-form">
                    <div className="pf-c-form__group">
                      <label className="pf-c-form__label" htmlFor="featured-sundae">
                        <span className="pf-c-form__label-text">
                          Set featured sundae to
                        </span>
                      </label>
                      <select className="pf-c-form-control" id="featured-sundae" name="featured-sundae">
                        <option>Select one</option>
                      </select>
                    </div>
                    <div className="pf-c-check">
                      <input className="pf-c-check__input" type="checkbox" id="check1" name="exampleCheck1" />
                      <label className="pf-c-check__label" htmlFor="check1">
                        Set as featured sundae for <strong>today only</strong></label>
                    </div>
                    <button className="pf-c-button pf-m-secondary pf-m-block" type="submit">
                      <CheckIcon /> Save as featured sundae
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="pf-l-grid__item pf-m-6-col">
              <div className="pf-c-card">
                <div className="pf-c-card__header">
                  <Title size="lg" headingLevel="h2">
                    Order of sundaes on menu
                  </Title>
                </div>
                <div className="pf-c-card__body">
                  <div className="pf-c-content pf-u-mb-md">
                    <small>Set the order that sundaes display in the menu.</small>
                  </div>
                  <DataList aria-label="Simple data list example">
                    <DataListItem aria-labelledby="sundae-one">
                      <DataListItemRow>
                        <div className="pf-c-data-list__item-control">
                        <div className="pf-c-data-list__toggle">
                          <button tabIndex={-1} className="pf-c-button pf-m-plain" type="button" aria-hidden="true">
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
                          <UpDownKeyboardScreenRdrAfter id="sundae-one" first />
                        </div>
                      </DataListItemRow>
                    </DataListItem>
                    <DataListItem aria-labelledby="sundae-two">
                      <DataListItemRow>
                        <div className="pf-c-data-list__item-control">
                        <div className="pf-c-data-list__toggle">
                          <button tabIndex={-1} className="pf-c-button pf-m-plain" type="button" aria-hidden="true">
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
                            <UpDownKeyboardScreenRdrAfter id="sundae-two" />
                          </div>
                        </div>
                      </DataListItemRow>
                    </DataListItem>
                    <DataListItem aria-labelledby="sundae-three">
                      <DataListItemRow>
                        <div className="pf-c-data-list__item-control">
                        <div className="pf-c-data-list__toggle">
                          <button tabIndex={-1} className="pf-c-button pf-m-plain" type="button" aria-hidden="true">
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
                            <UpDownKeyboardScreenRdrAfter id="sundae-three" last />
                          </div>
                        </div>
                      </DataListItemRow>
                    </DataListItem>
                  </DataList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default KeyboardScreenReaderAfter;