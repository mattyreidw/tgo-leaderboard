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

      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-black text-white text-xs rounded px-3 py-2 z-10 whitespace-nowrap">
        <strong>Members:</strong>
        <ul className="list-disc list-inside space-y-1">
          {members.map((member) => (
            <li key={member.id}>
              {member.name}
            </li>
          ))}
        </ul>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-black rotate-45"></div>
      </div>
    </div>
  );
}
