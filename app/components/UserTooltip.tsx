'use client';

type Props = {
  userId: string;
  teamName: string | null;
};

export default function UserTooltip({ userId, teamName }: Props) {
  return (
    <div className="relative group inline-block cursor-pointer">
      <span className="underline decoration-dotted">{userId}</span>

      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block bg-black text-white text-xs rounded px-3 py-2 z-10 whitespace-nowrap">
        {teamName ? `Team: ${teamName}` : 'Not on a team'}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-black rotate-45"></div>
      </div>
    </div>
  );
}
