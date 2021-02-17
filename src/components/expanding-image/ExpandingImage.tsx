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
                    backgroundImage: `linear-gradient(to right, #116466, rgba(4, 89, 110, 0.363)), url(${imageUrl})`,
                }}
            />
        </div>
    );
};

export default ExpandingImage;
