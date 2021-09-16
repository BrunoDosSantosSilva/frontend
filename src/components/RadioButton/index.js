import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

import '../RadioButton/styles.css'

function Radiobutton() {
    const CustonRadio = withStyles({
        root: {
            color: '#FFD3CA', '&$checked': { color: '#EB8F7A', },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    return (
        <div className= 'radioOptions'>
            <div >
                <CustonRadio />
                <span>Todos</span>
            </div>

            <div>
                <CustonRadio />
                <span>prioridade</span>
            </div>

            <div >
                <CustonRadio />
                <span>Normal</span>
            </div>
        </div>
    )
}

export default Radiobutton;