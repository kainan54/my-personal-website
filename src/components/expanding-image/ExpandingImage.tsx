import React from 'react';
import './ExpandingImage.scss';

interface Props {
    imageUrl: string;
}
const ExpandingImage: React.FC<Props> = function ({ imageUrl }: Props) {
    return (
        <div className="expanding-image-container">
            <div className="expanding-image" />
        </div>
    );
};

export default ExpandingImage;
