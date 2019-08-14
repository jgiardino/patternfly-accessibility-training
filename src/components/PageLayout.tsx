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
      <>
        <PageSection variant={PageSectionVariants.dark} className="pf-u-p-0 page__header">
          <div className="pf-l-grid">
            <div className="pf-l-grid__item pf-m-9-col pf-u-py-sm pf-u-px-lg">
              <Title headingLevel="h1" size="md">{this.props.title}</Title>
            </div>
            <div className="pf-l-grid__item pf-m-3-col pf-u-py-sm pf-u-px-lg">
              <Title headingLevel="h1" size="md">
                {instructionsTitle}
              </Title>
            </div>
          </div>
        </PageSection>
        <PageSection variant={PageSectionVariants.light} isFilled={true} className="pf-u-p-0 pf-u-h-100">
          <div className="pf-l-grid pf-u-h-100">
            <div className="pf-l-grid__item pf-m-9-col">
              {this.props.children}
            </div>
            <div className="pf-l-grid__item pf-m-3-col">
              {this.props.instructions}
            </div>
          </div>
        </PageSection>
      </>
    );
  }
}
   
export default PageLayout;