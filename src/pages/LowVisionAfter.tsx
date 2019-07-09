import React, { Component } from "react";
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import { ExclamationCircleIcon, AngleLeftIcon, AngleRightIcon, PlusIcon, MinusIcon } from '@patternfly/react-icons';
import PageLayout from "../components/PageLayout";
import LowVisionAfterSteps from "../instructions/LowVisionAfterSteps";

class LowVisionAfter extends Component {
  render() {
    const instructions = <LowVisionAfterSteps />;
    return (
      <PageLayout title="After example for Low & No Vision" instructions={instructions}>
        <div className="pf-l-stack ice-cream-form" >
          <div className="pf-l-stack__item pf-u-p-lg">
            <div className="pf-c-alert pf-m-danger pf-m-inline pf-u-mb-lg" aria-label="inline danger alert">
              <div className="pf-c-alert__icon">
                <ExclamationCircleIcon />
              </div>
              <h4 className="pf-c-alert__title">
                <span className="pf-screen-reader">
                Danger alert:</span> There are errors in the form. Also, the icon size seems off here.
              </h4>
            </div>
            <Title headingLevel="h1" size="2xl">New ice cream sundae</Title>
            <div className="pf-c-content">
              <small>Create a new sundae by selecting what ice cream flavors and toppings to use.</small>
            </div>
          </div>
          <div className="pf-l-stack__item pf-m-fill pf-u-p-lg ice-cream-form ice-cream-form-after">
            <form  className="pf-c-form">
              <div className="pf-c-form__group">
                <label className="pf-c-form__label" htmlFor="form-name">
                  <span className="pf-c-form__label-text">Name</span>
                  <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                </label>
                <input 
                  className="pf-c-form-control" 
                  required type="text" 
                  id="form-name" 
                  name="form-name" 
                  aria-invalid="true"
                  aria-describedby="form-helper-1" />
                <p className="pf-c-form__helper-text pf-m-error" id="form-helper-1">
                  A name is required</p>
              </div>
              <div className="pf-c-form__group">
                <label className="pf-c-form__label" htmlFor="form-desc">
                  <span className="pf-c-form__label-text">Description</span>
                  <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                </label>
                <textarea 
                  className="pf-c-form-control" 
                  required 
                  id="form-desc" 
                  name="form-desc" 
                  aria-invalid="true"
                  aria-describedby="form-helper-2" />
                <p className="pf-c-form__helper-text pf-m-error" id="form-helper-2">
                  A description is required</p>
              </div>
              <div className="low-vision-selection">
                <div className="pf-c-form__group low-vision-selection__label">
                  <label className="pf-c-form__label" htmlFor="form-flavors-available">
                    <span className="pf-c-form__label-text">Available flavors</span>
                  </label>
                </div>
                <div className="pf-c-form__group">
                    <select 
                      className="pf-c-form-control pf-u-h-initial pf-u-p-sm" 
                      id="form-flavors-available" 
                      name="form-flavors-available"
                    >
                      <option>Banana</option>
                      <option>Chocolate</option>
                      <option>Cookies and Cream</option>
                      <option>Pistachio</option>
                      <option>Strawberry</option>
                      <option>Vanilla</option>
                    </select>
                  </div>
                <div>
                  <Button variant="secondary">
                    Add Flavor
                  </Button> 
                </div>
                <div className="pf-c-form__group low-vision-selection__label">
                  <label className="pf-c-form__label" htmlFor="form-flavors-selected">
                    <span className="pf-c-form__label-text">Selected flavors</span>
                    <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </label>
                </div>
                <div className="pf-c-form__group">
                  <select 
                    className="pf-c-form-control pf-u-h-initial pf-u-p-sm invalid-select"
                    id="form-flavors-selected" 
                    name="form-flavors-selected" 
                    aria-describedby="form-helper-3"
                    multiple
                    size={4}
                  >
                    <option disabled>Select an available flavor</option>
                  </select>
                  <p className="pf-c-form__helper-text pf-m-error" id="form-helper-3">
                    At least one flavor is required.</p>
                </div>
                <div>
                  <Button variant="secondary">
                    Remove Flavor
                  </Button>
                </div>
              </div>
              <div className="low-vision-selection">
                <div className="pf-c-form__group low-vision-selection__label">
                  <label className="pf-c-form__label" htmlFor="form-toppings-available">
                    <span className="pf-c-form__label-text">Available toppings</span>
                  </label>
                </div>
                <div className="pf-c-form__group">
                  <select 
                    className="pf-c-form-control pf-u-h-initial pf-u-p-sm" 
                    id="form-toppings-available" 
                    name="form-toppings-available" 
                  >
                    <option>Caramel</option>
                    <option>Cookie crumbles - chocolate</option>
                    <option>Cookie crumbles - vanilla</option>
                    <option>Hot fudge</option>
                    <option>Peanuts</option>
                    <option>Strawberry sauce</option>
                  </select>
                </div>   
                <div>
                  <Button variant="secondary">
                    Add Flavor
                  </Button> 
                </div>
                <div className="pf-c-form__group low-vision-selection__label">
                  <label className="pf-c-form__label" htmlFor="form-toppings-selected">
                    <span className="pf-c-form__label-text">Selected toppings</span>
                    <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </label>
                </div>
                <div className="pf-c-form__group">
                  <select 
                    className="pf-c-form-control pf-u-h-initial pf-u-p-sm invalid-select"
                    id="form-toppings-selected" 
                    name="form-toppings-selected" 
                    aria-describedby="form-helper-3"
                    multiple
                    size={4}
                  >
                    <option disabled>Select an available topping</option>
                  </select>
                  <p className="pf-c-form__helper-text pf-m-error" id="form-helper-3">
                    At least one flavor is required.</p>
                </div>
                <div>
                  <Button variant="secondary">
                    Remove Flavor
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="pf-l-stack__item  pf-u-p-lg">
            <Button variant="primary">Add New Sundae</Button>{` `}
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </PageLayout>
    );
  }
}
 
export default LowVisionAfter;