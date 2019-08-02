import * as React from 'react';
import { accessibleRouteChangeHandler } from '@app/utils/utils';

interface IDynamicImport {
  load: () => Promise<any>;
  children: any;
  inAppNavigation: boolean;
}

class DynamicImport extends React.Component<IDynamicImport> {
  public state = {
    component: null
  };
  public componentDidMount() {
    this.props.load().then(component => {
      if (component) {
        this.setState({
          component: component.default ? component.default : component
        });
      }
    })
    .then(() => {
      if (this.props.inAppNavigation) {
        accessibleRouteChangeHandler();
      }
    });
  }
  public render() {
    return this.props.children(this.state.component);
  }
}

export { DynamicImport };
