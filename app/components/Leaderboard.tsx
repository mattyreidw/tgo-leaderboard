'use client';

import TeamTooltip from './TeamTooltip';
import UserTooltip from './UserTooltip';
import { useState } from 'react';
import { usernames } from '@/lib/usernames';


type TeamRow = {
  id: string;
  name: string;
  hiking: number;
  cycling: number;
  swimming: number;
  paddling: number;
  total: number;
  competitors: { id: string }[];
};

type CompetitorRow = {
  id: string;
  team_name: string | null; // null if not on a team
  hiking: number;
  cycling: number;
  swimming: number;
  paddling: number;
  total: number;
};

type LeaderboardProps = {
  teamData: TeamRow[];
  individualData: CompetitorRow[];
};

export default function Leaderboard({ teamData, individualData }: LeaderboardProps) {
  const [mode, setMode] = useState<'team' | 'individual'>('team');
  const roundToHundredth = (value: number) => Math.round(value * 100) / 100;

  return (
    <div className="space-y-4">
      {/* Toggle buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setMode('team')}
          className={`px-4 py-2 rounded transition cursor-pointer ${mode === 'team'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-black'
            }`}
        >
          Team
        </button>

        <button
          onClick={() => setMode('individual')}
          className={`px-4 py-2 rounded transition cursor-pointer ${mode === 'individual'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-black'
            }`}
        >
          Individual
        </button>
      </div>

      {/* Leaderboard Table */}
      <div>
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left font-semibold">Rank</th>
                  {mode === 'team' ? (
                    <>
                      <th className="p-3 text-left font-semibold">Team</th>
                    </>
                  ) : (
                    <>
                      <th className="p-3 text-left font-semibold">User</th>
                    </>
                  )}
                  <th className="p-3 text-left font-semibold">🥾 Hiking</th>
                  <th className="p-3 text-left font-semibold">🚴‍♂️ Cycling</th>
                  <th className="p-3 text-left font-semibold">🏊‍♂️ Swimming</th>
                  <th className="p-3 text-left font-semibold">🛶 Paddling</th>
                  <th className="p-3 text-left font-semibold">🏆 Total</th>
                </tr>
              </thead>
              <tbody>
                {mode === 'team'
                  ? teamData.map((team, i) => (
                    <tr key={team.id} className="odd:bg-gray-50">
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">
                        <TeamTooltip
                          teamName={team.name}
                          members={team.competitors.map((c) => ({
                            id: c.id,
                            name: usernames[c.id] ?? c.id,
                          }))}
                        />
                      </td>
                      <td className="p-3">{roundToHundredth(team.hiking)}</td>
                      <td className="p-3">{roundToHundredth(team.cycling)}</td>
                      <td className="p-3">{roundToHundredth(team.swimming)}</td>
                      <td className="p-3">{roundToHundredth(team.paddling)}</td>
                      <td className="p-3 font-semibold">{roundToHundredth(team.total)}</td>
                    </tr>
                  ))
                  : individualData.map((competitor, i) => (
                    <tr key={competitor.id} className="odd:bg-gray-50">
                      <td className="p-3">{i + 1}</td>
                      <td className="p-3">
                        <UserTooltip
                          userId={usernames[competitor.id] ?? competitor.id}
                          teamName={competitor.team_name}
                        />
                      </td>
                      <td className="p-3">{roundToHundredth(competitor.hiking)}</td>
                      <td className="p-3">{roundToHundredth(competitor.cycling)}</td>
                      <td className="p-3">{roundToHundredth(competitor.swimming)}</td>
                      <td className="p-3">{roundToHundredth(competitor.paddling)}</td>
                      <td className="p-3 font-semibold">{roundToHundredth(competitor.total)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
