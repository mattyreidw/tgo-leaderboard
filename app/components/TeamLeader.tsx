type TopTeam = {
  name: string;
  total_points: number;
};

export default function TeamLeader({ team }: { team: TopTeam }) {
  const roundToHundredth = (value: number) => Math.round(value * 100) / 100;

  return (
    <div className="flex-1 p-6 bg-green-200 rounded-2xl h-40 flex flex-col justify-between">
      <div>
        <h2 className="text-md font-semibold">🏆 Team Leader</h2>
      </div>
      <div>
        <p className="text-2xl font-bold">{team.name}</p>
        <p className="text-base font-medium">
          {roundToHundredth(team.total_points)} pts
        </p>
      </div>
    </div>
  );
}
