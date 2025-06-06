'use client';

import { usernames } from '@/lib/usernames';
import Link from 'next/link';

type RecentPoint = {
    value: number;
    type: string;
    date: string;
    competitor_id: string;
};

export default function RecentActivity({ items }: { items: RecentPoint[] }) {
    return (
        <div className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold pt-2">Recent Activity</h2>
            <ul className="space-y-1 text-gray-800">
                {items.map((item, i) => (
                    <li className="border-b border-gray-200 pb-2" key={i}>
                        <span className="font-bold">
                            {usernames[item.competitor_id] ?? item.competitor_id}
                        </span>{' '}
                        logged{' '}
                        <span className="font-bold">{Number(item.value).toFixed(2)}</span>
                        {' '}
                        points in{' '}
                        <span className="capitalize font-medium">{item.type}</span>
                    </li>
                ))}
            </ul>
            <Link href="/activity-log" className="inline-block px-6 py-3 border border-gray-200 rounded-2xl hover:bg-gray-100 transition cursor-pointer">View full activity log</Link>
        </div>
    );
}
