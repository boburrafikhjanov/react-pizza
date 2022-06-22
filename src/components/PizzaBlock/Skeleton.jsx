import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={1}
      width={350}
      height={500}
      viewBox="0 0 350 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
      <rect x="1" y="326" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="436" rx="10" ry="510" width="95" height="30" />
      <rect x="125" y="427" rx="24" ry="24" width="150" height="45" />
    </ContentLoader>
  );
};

export default Skeleton;
