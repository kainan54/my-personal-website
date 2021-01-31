import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './ArrowButton.scss';

interface Props extends RouteComponentProps {
    children: string;
    path?: string;
    clickFn?: () => void;
    animState?: {
        transition: string;
        timeout: number;
    };
}
const ArrowButton: React.FC<Props> = function ({ children, history, path, animState, clickFn }: Props) {
    return (
        <div className="arrow-btn">
            <div
                onClick={() => (path ? history.push({ pathname: path, state: animState }) : clickFn ? clickFn() : null)}
                className="arrow-btn-bg"
            />
            <div className="arrow-text">{children}</div>
        </div>
    );
};

export default withRouter(ArrowButton);
