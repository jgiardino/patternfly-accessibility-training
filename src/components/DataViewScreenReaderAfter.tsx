
import React, { Component } from "react";
import {
  Title
} from '@patternfly/react-core';
import NutritionalInfo from "./NutritionalInfo";
import { EggIcon, WineBottleIcon, CloudMeatballIcon, StroopwafelIcon } from '@patternfly/react-icons';

class DataViewScreenReaderAfter extends Component {
  render() {
    return (
      <div className="pf-l-gallery pf-m-gutter">
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-1">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">
              Butterscotch ice cream
            </Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Butterscotch base with toffee flavored ribbon and butterscotch candies.
            </div>
            <div className="pf-l-stack__item">
              <Title size="md" headingLevel="h4">
                Alergen information:{` `}
              </Title>
              <p>
                <EggIcon /> Eggs,{` `}
                <WineBottleIcon /> Dairy{` `}
              </p>
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for butterscotch ice cream" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-2">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">
              Sprinkles
            </Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Your basic rainbow sprinkles.
            </div>
            <div className="pf-l-stack__item">
              <Title size="md" headingLevel="h4">
                Alergen information:{` `}
              </Title>
              <p>
                <CloudMeatballIcon /> Cloudy with meatballs{` `}
              </p>
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for sprinkles" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">Waffle sails</Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Waffles cut into triangular shapes to create the distinctive sails that make this sundae look like a ship.
            </div>
            <div className="pf-l-stack__item">
              <Title size="md" headingLevel="h4">
                Alergen information:{` `}
              </Title>
              <p>
                <StroopwafelIcon /> Wheat{` `}
              </p>
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for waffles" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">Whipped Cream</Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Cream whipped in a can for extra fluffiness.
            </div>
            <div className="pf-l-stack__item">
              <Title size="md" headingLevel="h4">
                Alergen information:{` `}
              </Title>
              <p>
                <WineBottleIcon /> Dairy{` `}
              </p>
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for whipped cream" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">Cherry</Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
              <div className="pf-l-stack__item">
                Marachino cherry.
              </div>
            </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for cherry" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <Title size="lg" headingLevel="h3">Banana</Title>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
              <div className="pf-l-stack__item">
                Banana.
              </div>
            </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfo labelAria="Nutritional info for banana" />
          </div>
        </div>
      </div>
    );
  }
}
   
export default DataViewScreenReaderAfter;