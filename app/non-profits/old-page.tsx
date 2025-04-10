import { getBeneficiariesWithTeams } from '@/lib/queries/getBeneficiariesWithTeams';
import BeneficiaryCard from '../components/BeneficiaryCard';
import Banner from '../components/DonateBanner';

export default async function NonProfitsPage() {
  const beneficiaries = await getBeneficiariesWithTeams();

  return (
    <main>
      <div className="p-6">
        <Banner
          title="Pledge Your Donation"
          subtitle="Pledge to donate by opening a ticket with /tickets open. Donations go directly to the winning nonprofit. TGO doesn’t handle any funds."
        >
          <a href="https://discord.com/channels/345621611770282004/1353107062414119075" target='_blank' className="inline-block mt-4 px-8 py-3 bg-white text-blue-600 text-sm rounded-2xl hover:bg-gray-100 transition cursor-pointer">
            Pledge Now
          </a>
        </Banner>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 items-start">
        <div className="p-6 pt-0">
          <h1 className="text-3xl font-semibold mb-6">Non-Profit Beneficiaries</h1>

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
        <div>
          <div className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200 mb-6">

          </div>
        </div>
      </div>
    </main>
  );
}
