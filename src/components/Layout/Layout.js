import React from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css';

const layout = props => (
  <Aux>
    <div>Toolbar,Sidedrawer,backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
