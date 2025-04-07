'use client';

type Props = {
  userId: string;
  teamName: string | null;
};

export default function UserTooltip({ userId, teamName }: Props) {
  return (
    <div className="relative group inline-block cursor-pointer">
      <span className="underline decoration-dotted">{userId}</span>

      <div className="absolute z-10 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-3 py-2 left-1/2 -translate-x-1/2 top-full mt-2 w-max whitespace-nowrap">
        {teamName ? `Team: ${teamName}` : 'Not on a team'}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  );
}
