import TeamLeader from './TeamLeader';
import TopIndividual from './TopIndividual';
import TotalPledges from './TotalPledges';
import TotalPoints from './TotalPoints';

import { getTopTeam } from '@/lib/queries/getTopTeam';
import { getTopCompetitor } from '@/lib/queries/getTopCompetitor';
import { getTotalPledges } from '@/lib/queries/getTotalPledges';
import { getTotalPoints } from '@/lib/queries/getTotalPoints';

export default async function StatOverview() {
    const [
        topTeam,
        topCompetitor,
        pledges,
        totalPoints,
    ] = await Promise.all([
        getTopTeam(),
        getTopCompetitor(),
        getTotalPledges(),
        getTotalPoints(),
    ]);

    return (
        <div className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200 mb-6">
            <div>
                <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <TeamLeader team={topTeam} />
                <TopIndividual competitor={topCompetitor} />
                <TotalPoints points={totalPoints} />
                <TotalPledges pledges={pledges} />
            </div>
        </div>
    );
}