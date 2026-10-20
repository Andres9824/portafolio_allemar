import React from 'react';

interface SectionHeadProps {
  num: string;
  title: string;
  intro?: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ num, title, intro }) => (
  <div className="section__head">
    <p className="eyebrow section__num">{num}</p>
    <div>
      <h2 className="section__title">{title}</h2>
      {intro && <p className="section__intro">{intro}</p>}
    </div>
  </div>
);

export default SectionHead;
