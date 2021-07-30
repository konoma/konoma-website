import KonomaLogo from '@components/Logo/KonomaLogo';
import MailLink from '@components/Navigation/MailLink';
import PageLink from '@components/Navigation/PageLink';
import { BaseComponentProps } from 'helper/classNames';
import React from 'react';
import { CompanyInformationType, FooterInformationType } from '../../@types';

interface SiteFooterProps extends BaseComponentProps {
  companyInformation: CompanyInformationType;
  footerInformation: FooterInformationType;
}

const SiteFooter: React.FC<SiteFooterProps> = (props) => {
  const { companyInformation, footerInformation, className } = props;

  return (
    <footer className="max-w-3xl mx-auto p-16 text-center">
      <KonomaLogo textColor="indigo-700" backgroundColor="white" width="24" className="mb-6" />

      <address className="font-sans not-italic font-medium text-md mb-8">{companyInformation.address}</address>

      <div className="flex justify-center gap-12">
        <MailLink emailAddress={companyInformation.companyEmail} label={companyInformation.companyEmail} />
        <PageLink href={footerInformation.contactPage.slug} label={footerInformation.contactLabel} />
      </div>
    </footer>
  );
};

export default SiteFooter;
