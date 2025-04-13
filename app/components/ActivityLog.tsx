'use client';

import { useState } from 'react';
import { usernames } from '@/lib/usernames';

type Activity = {
  id: string;
  competitor_id: string;
  type: string;
  value: number;
  date: string;
};

export default function ActivityLog({ log }: { log: Activity[] }) {
  const [selectedUser, setSelectedUser] = useState<string>('all');

  const uniqueUsers = Array.from(
    new Set(log.map((entry) => entry.competitor_id))
  );

  const filtered = selectedUser === 'all'
    ? log
    : log.filter((entry) => entry.competitor_id === selectedUser);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-6">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-2xl font-semibold">Activity Log</h2>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="text-sm border px-2 py-1 rounded"
        >
          <option value="all">All Users</option>
          {uniqueUsers.map((id) => (
            <option key={id} value={id}>
              {usernames[id] ?? id}
            </option>
          ))}
        </select>
      </div>

      <ul className="divide-y divide-gray-200 text-sm">
        {filtered.map((entry) => (
          <li key={entry.id} className="py-3 px-6">
            <span className="font-medium">
              {usernames[entry.competitor_id] ?? entry.competitor_id}
            </span>{' '}
            logged{' '}
            <span className="font-semibold">{entry.value.toFixed(2)}</span>{' '}
            points in{' '}
            <span className="capitalize">{entry.type}</span>{' '}
            <span className="text-gray-500">
              ({new Date(entry.date).toLocaleDateString()})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
