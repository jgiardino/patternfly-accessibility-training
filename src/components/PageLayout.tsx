import React, { Component } from "react";
import {
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';

interface Props {
  instructions?: any;
  title: string;
  before?: boolean;
}

class PageLayout extends Component<Props, any> {
  render() {
    const instructionsTitle = this.props.before ?
      "How to test" :
      "How to fix";
    return (
      <PageSection variant={PageSectionVariants.light} isFilled={true} className="pf-l-flex pf-u-h-100 pf-u-p-0 main-section-no-scroll">
        
          <div className="pf-m-flex-2 pf-m-flex-3-on-xl pf-u-h-100 pf-u-mr-0 pf-l-stack">
            <Title headingLevel="h1" size="md" className="pf-u-py-sm pf-u-px-lg main-section__title pf-l-stack__item">{this.props.title}</Title>
            {this.props.children}
          </div>
          <div className="pf-m-flex-1 pf-u-h-100 pf-c-card">
            <Title headingLevel="h1" size="md" className="pf-u-py-sm pf-u-px-lg main-section__title">
              {instructionsTitle}
            </Title>
            {this.props.instructions}
          </div>

      </PageSection>
    );
  }
}
   
export default PageLayout;