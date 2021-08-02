import PageLink from '@components/Navigation/PageLink';
import React from 'react';
import { CtaType } from '../../@types';
import { BaseComponentProps } from '../../helper/classNames';

interface CTAProps extends BaseComponentProps {
  cta: CtaType;
}

const CTA: React.FunctionComponent<CTAProps> = (props) => {
  const { cta } = props;

  return (
    <div className="bg-indigo-900 py-32 px-56">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-white mb-16">{cta.title}</h2>
        <p className="text-2xl text-white mb-10 font-medium">{cta.description}</p>
        <PageLink href={cta.target.slug} label={cta.targetLabel} color="white" />
      </div>
    </div>
  );
};

export default CTA;
