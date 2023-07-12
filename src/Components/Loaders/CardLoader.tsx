import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={287}
        height={356}
        viewBox="0 0 287 356"
        backgroundColor="#f3ecec"
        foregroundColor="#d7d0d0"
        {...props}
    >
        <rect x="0" y="0" rx="20" ry="20" width="287" height="39" />
        <rect x="0" y="121" rx="0" ry="0" width="287" height="57" />
        <rect x="0" y="310" rx="0" ry="0" width="133" height="34" />
        <rect x="0" y="13" rx="0" ry="0" width="287" height="81" />
    </ContentLoader>
);

export default CardLoader;