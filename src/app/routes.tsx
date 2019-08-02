import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Alert, PageSection } from '@patternfly/react-core';
import { DynamicImport } from '@app/DynamicImport';
import { accessibleRouteChangeHandler } from '@app/utils/utils';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { NotFound } from '@app/NotFound/NotFound';
import DocumentTitle from 'react-document-title';
import { Home } from "../pages/Home";
import LowVisionBefore from "../pages/LowVisionBefore";
import LowVisionAfter from "../pages/LowVisionAfter";
import KeyboardMotorBefore from "../pages/KeyboardMotorBefore";
import KeyboardMotorAfter from "../pages/KeyboardMotorAfter";
import KeyboardScreenReaderBefore from "../pages/KeyboardScreenReaderBefore";
import KeyboardScreenReaderAfter from "../pages/KeyboardScreenReaderAfter";
import ScreenReaderBefore from "../pages/ScreenReaderBefore";
import ScreenReaderAfter from "../pages/ScreenReaderAfter";

const getSupportModuleAsync = () => {
  return () => import(/* webpackChunkName: 'support' */ '@app/Support/Support');
};

const Support = (routeProps: RouteComponentProps) => {
  return (
    <DynamicImport load={getSupportModuleAsync()}>
      {(Component: any) => {
          let loadedComponent: any;
          if (Component === null) {
            loadedComponent = (
              <PageSection aria-label="Loading Content Container">
                <div className="pf-l-bullseye">
                  <Alert title="Loading" className="pf-l-bullseye__item" />
                </div>
              </PageSection>
            );
          } else {
            loadedComponent = <Component.Support {...routeProps} />;
          }
          return loadedComponent
      }}
    </DynamicImport>
  );
};

const RouteWithTitleUpdates = ({
  component: Component,
  isAsync = false,
  title,
  ...rest
}) => {
  function routeWithTitle(routeProps: RouteComponentProps) {
    return (
      <DocumentTitle title={title}>
        <Component {...routeProps} />
      </DocumentTitle>
    )
  }

  React.useEffect(() => {
    if (!isAsync) {
      accessibleRouteChangeHandler()
    }
  }, []);

  return (
    <Route {...rest} render={routeWithTitle} />
  );
}

export interface IAppRoute {
  label: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  icon: any;
  exact?: boolean;
  path: string;
  title: string;
  isAsync?: boolean;
}

const routes: IAppRoute[] = [
  {
    component: Home,
    exact: true,
    icon: null,
    label: 'Dashboard',
    path: '/dashboard',
    title: 'Patternfly Accessibility Training'
  },
  {
    component: Support,
    exact: true,
    icon: null,
    isAsync: true,
    label: 'Support',
    path: '/support',
    title: 'Support Page Title'
  },
  {
    component: LowVisionBefore,
    exact: true,
    icon: null,
    label: 'LowVisionBefore',
    path: '/LowVisionBefore',
    title: 'LowVisionBefore Page Title'
  },
  {
    component: LowVisionAfter,
    exact: true,
    icon: null,
    label: 'LowVisionAfter',
    path: '/LowVisionAfter',
    title: 'LowVisionAfter Page Title'
  },
  {
    component: KeyboardMotorBefore,
    exact: true,
    icon: null,
    label: 'KeyboardMotorBefore',
    path: '/KeyboardMotorBefore',
    title: 'KeyboardMotorBefore Page Title'
  },
  {
    component: KeyboardMotorAfter,
    exact: true,
    icon: null,
    label: 'KeyboardMotorAfter',
    path: '/KeyboardMotorAfter',
    title: 'KeyboardMotorAfter Page Title'
  },
  {
    component: KeyboardScreenReaderBefore,
    exact: true,
    icon: null,
    label: 'KeyboardScreenReaderBefore',
    path: '/KeyboardScreenReaderBefore',
    title: 'KeyboardScreenReaderBefore Page Title'
  },
  {
    component: KeyboardScreenReaderAfter,
    exact: true,
    icon: null,
    label: 'KeyboardScreenReaderAfter',
    path: '/KeyboardScreenReaderAfter',
    title: 'KeyboardScreenReaderAfter Page Title'
  },
  {
    component: ScreenReaderBefore,
    exact: true,
    icon: null,
    label: 'ScreenReaderBefore',
    path: '/ScreenReaderBefore',
    title: 'ScreenReaderBefore Page Title'
  },
  {
    component: ScreenReaderAfter,
    exact: true,
    icon: null,
    label: 'ScreenReaderAfter',
    path: '/ScreenReaderAfter',
    title: 'ScreenReaderAfter Page Title'
  },
];

const AppRoutes = () => (
  <Switch>
    {routes.map(({ path, exact, component, title, isAsync }, idx) => (
      <RouteWithTitleUpdates
        path={path}
        exact={exact}
        component={component}
        key={idx}
        title={title}
        isAsync={isAsync} />
    ))}
    <Redirect exact={true} from="/" to="/dashboard" />
    <RouteWithTitleUpdates component={NotFound} title={'404 Page Not Found'} />
  </Switch>
);

export { AppRoutes, routes };
