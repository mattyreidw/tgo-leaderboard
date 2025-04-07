type TeamTooltipProps = {
  teamName: string;
  members: { id: string; name: string }[];
};

export default function TeamTooltip({ teamName, members }: TeamTooltipProps) {
  return (
    <div className="relative group inline-block cursor-pointer">
      <span className="underline decoration-dotted group-hover:text-blue-700">
        {teamName}
      </span>

      <div className="absolute z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-3 py-2 left-1/2 -translate-x-1/2 top-full mt-2 w-max whitespace-nowrap">
        <strong>Members:</strong>
        <ul className="list-disc list-inside space-y-1">
          {members.map((member) => (
            <li key={member.id}>
              {member.name}
            </li>
          ))}
        </ul>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );
}
