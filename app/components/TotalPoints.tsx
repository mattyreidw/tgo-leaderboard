type PointsSummary = {
    total: number;
  };
  
  export default function TotalPoints({ points }: { points: PointsSummary }) {
    return (
      <div className="p-6 bg-gray-200 rounded-lg mb-6 h-40 flex flex-col justify-between">
      <div>
        <h2 className="text-md font-semibold">📊 Total Points</h2>
      </div>
      <div>
        <p className="text-2xl font-bold">
          {Number(points.total).toFixed(2)} pts
        </p>
      </div>
    </div>
    );
  }
  