import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './ArrowButton.scss';

interface Props extends RouteComponentProps {
    children: string;
    path: string;
    animState: {
        transition: string;
        timeout: number;
    };
}
const ArrowButton: React.FC<Props> = function ({ children, history, path, animState }: Props) {
    return (
        <div onClick={() => history.push({ pathname: path, state: animState })} className="arrow-btn">
            <div>{children}</div>
        </div>
    );
};

export default withRouter(ArrowButton);
