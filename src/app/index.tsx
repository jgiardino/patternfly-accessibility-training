import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter } from "react-router-dom";
import '@patternfly/patternfly/patternfly.css';
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
import KeyboardScreenReaderBefore from "../pages/KeyboardScreenReaderBefore";
import KeyboardScreenReaderAfter from "../pages/KeyboardScreenReaderAfter";
import ScreenReaderBefore from "../pages/ScreenReaderBefore";
import ScreenReaderAfter from "../pages/ScreenReaderAfter";
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
    activeItem: 'home'
  };
  public render() {
    const { activeItem } = this.state;
    const PageNav = (
      <Nav onSelect={this.onNavSelect} id="nav-primary-simple">
        <NavList id="nav-list-simple" variant={NavVariants.simple}>
          <NavItem itemId="grp-1_itm-1" isActive={activeItem === 'home'}>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-2" isActive={activeItem === 'LowVisionBefore'}>
            <NavLink to="/LowVisionBefore">Low & No Vision - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-3" isActive={activeItem === 'LowVisionAfter'}>
            <NavLink to="/LowVisionAfter">Low & No Vision - After</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-4" isActive={activeItem === 'KeyboardMotorBefore'}>
            <NavLink to="/KeyboardMotorBefore">Keyboard & Motor - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-5" isActive={activeItem === 'KeyboardMotorAfter'}>
            <NavLink to="/KeyboardMotorAfter">Keyboard & Motor - After</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-2" isActive={activeItem === 'KeyboardScreenReaderBefore'}>
            <NavLink to="/KeyboardScreenReaderBefore">Keyboard & Screen Reader - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-3" isActive={activeItem === 'KeyboardScreenReaderAfter'}>
            <NavLink to="/KeyboardScreenReaderAfter">Keyboard & Screen Reader - After</NavLink>
          </NavItem>
          <NavItemSeparator />
          <NavItem itemId="grp-1_itm-4" isActive={activeItem === 'ScreenReaderBefore'}>
            <NavLink to="/ScreenReaderBefore">Screen Reader - Before</NavLink>
          </NavItem>
          <NavItem itemId="grp-1_itm-5" isActive={activeItem === 'ScreenReaderAfter'}>
            <NavLink to="/ScreenReaderAfter">Screen Reader - After</NavLink>
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
          <Route path="/KeyboardScreenReaderBefore" component={KeyboardScreenReaderBefore} />
          <Route path="/KeyboardScreenReaderAfter" component={KeyboardScreenReaderAfter} />
          <Route path="/ScreenReaderBefore" component={ScreenReaderBefore} />
          <Route path="/ScreenReaderAfter" component={ScreenReaderAfter} />
        </Page>
      </BrowserRouter>
    );
  }
  private onNavSelect = result => {
    this.setState({ activeItem: result.itemId });
  };
}
