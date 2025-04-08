type TopCompetitor = {
  id: string;
  total_points: number;
};

import { usernames } from '@/lib/usernames';

export default function TopIndividual({ competitor }: { competitor: TopCompetitor }) {
  const roundToHundredth = (value: number) => Math.round(value * 100) / 100;
  const displayName = usernames[competitor.id] ?? competitor.id;

  return (
    <div className="flex-1 p-6 bg-blue-300 rounded-2xl h-40 flex flex-col justify-between">
      <div>
        <h2 className="text-md font-semibold">🥇 Top Competitor</h2>
      </div>
      <div>
        <p className="text-2xl font-bold">{displayName}</p>
        <p className="text-base font-medium">
          {roundToHundredth(competitor.total_points)} pts
        </p>
      </div>
    </div>
  );
}
