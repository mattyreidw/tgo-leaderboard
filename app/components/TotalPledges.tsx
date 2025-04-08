type PledgesSummary = {
    total: number;
  };
  
  export default function TotalPledges({ pledges }: { pledges: PledgesSummary }) {
    return (
      <div className="flex-1 p-6 bg-gray-100 rounded-2xl h-40 flex flex-col justify-between">
      <div>
        <h2 className="text-md font-semibold">💰 Total Pledged</h2>
      </div>
      <div>
        <p className="text-2xl font-bold">
          ${Number(pledges.total).toFixed(2)}
        </p>
      </div>
    </div>
    );
  }
  