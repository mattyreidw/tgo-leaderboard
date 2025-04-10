import { getBeneficiariesWithTeams } from '@/lib/queries/getBeneficiariesWithTeams';
import Banner from '../components/DonateBanner';
import BeneficiaryFeed from '../components/BeneficiaryFeed';
import { getPledges } from '@/lib/queries/getPledges';
import PledgeList from '../components/PledgeList';

export default async function NonProfitsPage() {
  const beneficiaries = await getBeneficiariesWithTeams();
  const pledges = await getPledges();

  return (
    <main className="p-6">

      <div className="grid grid-cols-1">
        <div>
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

          <BeneficiaryFeed beneficiaries={beneficiaries} />
          
          <PledgeList pledges={pledges} />

        </div>
      </div>
    </main>
  );
}
