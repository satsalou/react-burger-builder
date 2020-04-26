import React from 'react';

import Aux from '../../hoc/Aux';
import App from '../../App';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawyer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;