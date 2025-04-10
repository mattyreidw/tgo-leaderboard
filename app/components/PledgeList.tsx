import { usernames } from '@/lib/usernames';

type Pledge = {
    id: string;
    value: number;
};

export default function PledgeList({ pledges }: { pledges: Pledge[] }) {
    const total = pledges.reduce((sum, p) => sum + p.value, 0);

    return (
        <div className="bg-white rounded-2xl border border-gray-200">
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Pledges</h2>
            </div>
            <div>
                <ul>
                    {pledges.map((pledge) => (
                        <li key={pledge.id} className="flex justify-between border-b border-gray-200 py-2 px-6">
                            <span>{usernames[pledge.id] ?? pledge.id}</span>
                            <span>${pledge.value.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="font-semibold text-right p-6">
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
