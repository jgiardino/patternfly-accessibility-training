
import React, { Component } from "react";
import NutritionalInfoLink from "./NutritionalInfoLink";
import { EggIcon, WineBottleIcon, CloudMeatballIcon, StroopwafelIcon } from '@patternfly/react-icons';

class DataViewScreenReaderBefore extends Component {
  render() {
    return (
      <div className="pf-l-gallery pf-m-gutter">
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-1">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">
              Butterscotch ice cream
            </div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Butterscotch base with toffee flavored ribbon and butterscotch candies.
            </div>
            <div className="pf-l-stack__item">
              Alergen information:{` `}
              <EggIcon />{` `}
              <WineBottleIcon />{` `}
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-2">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">
              Sprinkles
            </div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Your basic rainbow sprinkles.
            </div>
            <div className="pf-l-stack__item">
              Alergen information:{` `}
              <CloudMeatballIcon />{` `}
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">Waffle sails</div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Waffles cut into triangular shapes to create the distinctive sails that make this sundae look like a ship.
            </div>
            <div className="pf-l-stack__item">
              Alergen information:{` `}
              <StroopwafelIcon />{` `}
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">Whipped cream</div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
            <div className="pf-l-stack__item">
              Cream whipped in a can for extra fluffiness.
            </div>
            <div className="pf-l-stack__item">
              Alergen information:{` `}
              <WineBottleIcon />{` `}
            </div>
          </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink labelAria="Whipped cream nutritional information" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">Cherry</div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
              <div className="pf-l-stack__item">
                Marachino cherry.
              </div>
            </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink labelAria="Cherry nutritional information" />
          </div>
        </div>
        <div className="pf-c-card pf-m-hoverable pf-m-compact" id="card-3">
          <div className="pf-c-card__header">
            <div className="pf-c-title pf-m-lg">Banana</div>
          </div>
          <div className="pf-c-card__body">
            <div className="pf-l-stack pf-m-gutter">
              <div className="pf-l-stack__item">
                Banana.
              </div>
            </div>
          </div>
          <div className="pf-c-card__footer">
            <NutritionalInfoLink labelAria="Banana nutritional information" />
          </div>
        </div>
      </div>
    );
  }
}
   
export default DataViewScreenReaderBefore;