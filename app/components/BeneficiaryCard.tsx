import Link from 'next/link';

type Props = {
  name: string;
  link: string;
  blurb: string;
  teams: string[];
};

export default function BeneficiaryCard({ name, link, blurb, teams }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-6">
      <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {name}
        </Link>
      </h2>
      <p className="text-gray-700 mb-2">{blurb}</p>
      </div>
      <div className="px-6 pt-2 pb-3 rounded-b-2xl border-t border-t-gray-200">
        <p className="text-sm text-gray-500">
          Supported by:{' '}
          <span className="font-medium">{teams.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}
