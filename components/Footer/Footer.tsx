import KonomaLogo from '@components/Logo/KonomaLogo';
import KonomaLogoInverted from '@components/Logo/KonomaLogoInverted';
import MailLink from '@components/Navigation/MailLink';
import PageLink from '@components/Navigation/PageLink';
import { BaseComponentProps } from 'helper/classNames';
import React from 'react';
import { CompanyInformationType, FooterInformationType } from '../../@types';

interface FooterProps extends BaseComponentProps {
  companyInformation: CompanyInformationType;
  footerInformation: FooterInformationType;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { companyInformation, footerInformation, className } = props;

  return (
    <footer className="max-w-3xl mx-auto p-16 text-center">
      <KonomaLogoInverted className="w-96 mb-6 mx-auto" />

      <address className="font-sans not-italic font-medium text-md mb-8">{companyInformation.address}</address>

      <div className="flex justify-center gap-12">
        <MailLink emailAddress={companyInformation.companyEmail} label={companyInformation.companyEmail} />
        <PageLink href={footerInformation.contactPage.slug} label={footerInformation.contactLabel} />
      </div>
    </footer>
  );
};

export default Footer;
