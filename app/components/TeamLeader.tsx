type TopTeam = {
  name: string;
  total_points: number;
};

export default function TeamLeader({ team }: { team: TopTeam }) {
  const roundToHundredth = (value: number) => Math.round(value * 100) / 100;

  return (
    <div className="p-6 bg-yellow-100 border border-yellow-300 rounded-lg mb-6 h-40 flex flex-col justify-between">
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
