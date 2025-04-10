import BeneficiaryCard from './BeneficiaryCard';

type Beneficiary = {
  beneficiary_name: string;
  beneficiary_link: string;
  beneficiary_blurb: string;
  teams: string[];
};

export default function BeneficiaryFeed({ beneficiaries }: { beneficiaries: Beneficiary[] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-6">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Non-Profit Beneficiaries</h2>
      </div>
      <div className="space-y-4">
        {beneficiaries.map((b) => (
          <BeneficiaryCard
            key={b.beneficiary_name}
            name={b.beneficiary_name}
            link={b.beneficiary_link}
            blurb={b.beneficiary_blurb}
            teams={b.teams}
          />
        ))}
      </div>
    </div>
  );
}
