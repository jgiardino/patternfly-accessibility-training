import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter } from "react-router-dom";
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';
import '@patternfly/react-styles/css/utilities/Sizing/sizing.css';
import '@patternfly/react-styles/css/utilities/Alignment/alignment.css';
import '@patternfly/react-styles/css/utilities/Flex/flex.css';
import '@patternfly/react-styles/css/layouts/Flex/flex.css';
import '@app/app.css';
import Home from "../pages/Home";
import LowVisionBefore from "../pages/LowVisionBefore";
import LowVisionAfter from "../pages/LowVisionAfter";
import KeyboardMotorBefore from "../pages/KeyboardMotorBefore";
import KeyboardMotorAfter from "../pages/KeyboardMotorAfter";
import {
  Brand,
  Nav,
  NavList,
  NavItem,
  NavItemSeparator,
  NavVariants,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent
} from '@patternfly/react-core';
import imgBrand from '../imgBrand.png';


export default class App extends Component {
  public state = {
    activeItem: 'grp-1_itm-1'
  };
  public render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} id="nav-primary-simple">
        <NavList id="nav-list-simple" variant={NavVariants.simple}>
          <NavItem itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            <NavLink to="/LowVisionBefore">Low Vision - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            <NavLink to="/LowVisionAfter">Low Vision - After</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'}>
            <NavLink to="/KeyboardMotorBefore">Keyboard Motor - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'}>
            <NavLink to="/KeyboardMotorAfter">Keyboard Motor - After</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const PageSkipToContent = <SkipToContent href="#main-content">Skip to Content</SkipToContent>;

    return (
      <BrowserRouter>
        <Page header={Header} sidebar={Sidebar} isManagedSidebar skipToContent={PageSkipToContent}>
          <Route exact path="/" component={Home} />
          <Route path="/LowVisionBefore" component={LowVisionBefore} />
          <Route path="/LowVisionAfter" component={LowVisionAfter} />
          <Route path="/KeyboardMotorBefore" component={KeyboardMotorBefore} />
          <Route path="/KeyboardMotorAfter" component={KeyboardMotorAfter} />
        </Page>
      </BrowserRouter>
    );
  }
  private onNavSelect = result => {
    this.setState({ activeItem: result.itemId });
  };
}
