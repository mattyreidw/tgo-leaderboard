export const dynamic = 'force-dynamic';

import Header from './components/Header';
import Leaderboard from './components/Leaderboard';
import TeamLeader from './components/TeamLeader';
import TopIndividual from './components/TopIndividual';
import TotalPledges from './components/TotalPledges';
import TotalPoints from './components/TotalPoints';

import { getLeaderboardData } from '@/lib/queries/getLeaderboard';
import { getTopTeam } from '@/lib/queries/getTopTeam';
import { getTopCompetitor } from '@/lib/queries/getTopCompetitor';
import { getTotalPledges } from '@/lib/queries/getTotalPledges';
import { getTotalPoints } from '@/lib/queries/getTotalPoints';
import { getIndividualLeaderboardData } from '@/lib/queries/getIndividualLeaderboard';


export default async function HomePage() {
  const [
    teamData,
    individualData,
    topTeam,
    topCompetitor,
    pledges,
    totalPoints,
  ] = await Promise.all([
    getLeaderboardData(),
    getIndividualLeaderboardData(),
    getTopTeam(),
    getTopCompetitor(),
    getTotalPledges(),
    getTotalPoints(),
  ]);

  return (
    <main className="p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <TeamLeader team={topTeam} />
          <TopIndividual competitor={topCompetitor} />
          <TotalPoints points={totalPoints} />
          <TotalPledges pledges={pledges} />
        </div>

        {/* Right column */}
        <div>
          <Leaderboard teamData={teamData} individualData={individualData} />
        </div>
      </div>
    </main>
  );
}
