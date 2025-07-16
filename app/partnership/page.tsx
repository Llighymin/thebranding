import PartnershipHero from './PartnershipHero';
import PartnershipBenefits from './PartnershipBenefits';
import PartnershipProcess from './PartnershipProcess';
import PartnershipForm from './PartnershipForm';
import Header from '@/components/Header';

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PartnershipHero />
      <PartnershipBenefits />
      <PartnershipProcess />
      <PartnershipForm />
    </div>
  );
}