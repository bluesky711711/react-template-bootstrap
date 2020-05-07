import React from "react";

import AppHeader from '../components/header';
import AppFooter from '../components/footer';

class FrontendLayout extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        {this.props.children}
        <AppFooter />
      </>
    );
  }
}

export default FrontendLayout;