import React from 'react';
import './ExpandingImage.scss';

interface Props {
    imageUrl: string;
}
const ExpandingImage: React.FC<Props> = function ({ imageUrl }: Props) {
    return (
        <div className="expanding-image-container">
            <div
                className="expanding-image"
                style={{
                    backgroundImage: `linear-gradient( 135deg, rgba(255, 211, 105, 0.8), rgba(21, 21, 21, 0.9) 50%, rgba(18, 18, 18, 1) ), url(${imageUrl})`,
                }}
            />
        </div>
    );
};

export default ExpandingImage;
