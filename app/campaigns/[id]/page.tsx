
import CampaignDetail from './CampaignDetail';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function CampaignPage({ params }: { params: { id: string } }) {
  return <CampaignDetail campaignId={params.id} />;
}
