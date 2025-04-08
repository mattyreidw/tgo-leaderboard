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
    <div className="space-y-4 bg-white rounded-2xl p-6 border border-gray-200">
      {/* Toggle buttons */}
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">Leaderboards</h2>
        <div className="inline-flex rounded-2xl bg-gray-100 gap-2 overflow-hidden p-2">
          <button
            onClick={() => setMode('team')}
            className={`px-4 py-2 text-md transition cursor-pointer font-semibold ${mode === 'team'
              ? 'bg-white text-black rounded-2xl shadow-sm'
              : 'text-gray-700 rounded-2xl'
              }`}
          >
            Team
          </button>

          <button
            onClick={() => setMode('individual')}
            className={`px-4 py-2 text-md transition cursor-pointer font-semibold ${mode === 'individual'
              ? 'bg-white text-black rounded-2xl shadow-sm'
              : 'text-gray-700 rounded-2xl'
              }`}
          >
            Individual
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div>
        <div className="rounded-lg border border-gray-200">
          <div className="overflow-y-auto">
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
