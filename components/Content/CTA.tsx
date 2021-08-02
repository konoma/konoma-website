import ContentRow from '@components/Layout/ContentRow';
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
    <div className="bg-indigo-900 px-8 md:px-16 lg:px-56 py-16 md:py-32">
      <ContentRow>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 md:mb-16">{cta.title}</h2>
        <p className="text-xl md:text-2xl text-white mb-10 font-medium">{cta.description}</p>
        <PageLink href={cta.target.slug} label={cta.targetLabel} color="white" />
      </ContentRow>
    </div>
  );
};

export default CTA;
