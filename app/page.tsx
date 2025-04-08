export const dynamic = 'force-dynamic';

import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import StatOverview from './components/StatOverview';
import RecentActivity from './components/RecentActivity';

import { getLeaderboardData } from '@/lib/queries/getLeaderboard';
import { getIndividualLeaderboardData } from '@/lib/queries/getIndividualLeaderboard';
import { getRecentActivity } from '@/lib/queries/getRecentActivity';


export default async function HomePage() {
  const [
    teamData,
    individualData,
    recent,
  ] = await Promise.all([
    getLeaderboardData(),
    getIndividualLeaderboardData(),
    getRecentActivity(),
  ]);

  return (
    <main className="p-6">
      <Header />
      <div className="grid grid-cols-1">
        <div>
          <StatOverview />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 items-start">
          <RecentActivity items={recent} />
          <Leaderboard teamData={teamData} individualData={individualData} />
        </div>
      </div>
    </main>
  );
}
