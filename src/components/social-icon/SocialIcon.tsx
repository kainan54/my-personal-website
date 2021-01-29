import React from 'react';
import './SocialIcon.scss';
interface Props {
    imageUrl: string;
    linkUrl: string;
    extraPadding?: boolean;
}
const SocialIcon: React.FC<Props> = function ({ imageUrl, linkUrl, extraPadding }: Props) {
    return (
        <a href={linkUrl}>
            <img className={`social-link ${extraPadding ? 'extra-padding' : null}`} src={imageUrl} />
        </a>
    );
};

export default SocialIcon;
