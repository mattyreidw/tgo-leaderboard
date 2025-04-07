// lib/queries/getLeaderboard.ts
import pool from '@/lib/db';

export async function getLeaderboardData() {
  const query = `
   SELECT
  teams.id,
  teams.name,

  COALESCE(SUM(CASE WHEN points.type = 'hiking' THEN points.value ELSE 0 END), 0) AS hiking,
  COALESCE(SUM(CASE WHEN points.type = 'cycling' THEN points.value ELSE 0 END), 0) AS cycling,
  COALESCE(SUM(CASE WHEN points.type = 'swimming' THEN points.value ELSE 0 END), 0) AS swimming,
  COALESCE(SUM(CASE WHEN points.type = 'paddling' THEN points.value ELSE 0 END), 0) AS paddling,
  COALESCE(SUM(points.value), 0) AS total,

  json_agg(DISTINCT jsonb_build_object('id', competitors.id))
    FILTER (WHERE competitors.id IS NOT NULL) AS competitors

FROM teams
LEFT JOIN competitors ON competitors.team_id = teams.id
LEFT JOIN points ON points.competitor_id = competitors.id

GROUP BY teams.id
ORDER BY total DESC;

  `;

  const result = await pool.query(query);
  return result.rows;
}
