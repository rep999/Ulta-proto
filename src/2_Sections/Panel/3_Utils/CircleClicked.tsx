import React from 'react';

const CircleClicked = (elementID: any, stateSetter: any, stateVal: any): any => {
    const CircleSelected = document.getElementById(elementID) as HTMLImageElement;

    if (CircleSelected && !stateVal) {
        CircleSelected.src = '/purpleCircle.png'
        stateSetter(true)
        CircleSelected.style.zIndex = '999';
    }
    else {
        if (CircleSelected) CircleSelected.src = '/whiteCircle.png'
        stateSetter(false)
        CircleSelected.style.zIndex = '0';
    }
}
