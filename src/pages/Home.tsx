import * as React from "react";
import {
  PageSection,
  PageSectionVariants,
  Text,
  TextContent
} from '@patternfly/react-core';

class Home extends React.Component {
  render() {
    return (
      <>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent className="pf-u-w-50vw-on-lg">
            <Text component="h1">Accessibility Training</Text>
            <Text component="p">
              This site is designed to illustrate some of the ways we can make web applications a little more challenging for certain users, and a few things we can do to improve those pain points.
            </Text>
            <Text component="p">
              Each before example includes tips on how to check for issues. Each after example identifies what the issues were, and what updates were made to fix them.
            </Text>
          </TextContent>
        </PageSection>
      </>
    );
  }
}

export { Home };
