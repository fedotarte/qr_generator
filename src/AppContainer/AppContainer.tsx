import React from 'react';

export interface IContainerProps {
    leftChild?: React.ReactNode;
    rightChild?: React.ReactNode;
}

function AppContainer({ leftChild, rightChild }: IContainerProps): JSX.Element {
    return (
        <>
            {leftChild}
            {rightChild}
        </>
    );
}

AppContainer.defaultProps = {
    leftChild: null,
    rightChild: null
};

export default AppContainer;
