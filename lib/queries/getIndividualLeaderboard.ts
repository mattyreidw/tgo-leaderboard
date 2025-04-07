import pool from '@/lib/db';

export async function getIndividualLeaderboardData() {
  const query = `
    SELECT
  competitors.id,
  teams.name AS team_name,

  COALESCE(SUM(CASE WHEN points.type = 'hiking' THEN points.value ELSE 0 END), 0) AS hiking,
  COALESCE(SUM(CASE WHEN points.type = 'cycling' THEN points.value ELSE 0 END), 0) AS cycling,
  COALESCE(SUM(CASE WHEN points.type = 'swimming' THEN points.value ELSE 0 END), 0) AS swimming,
  COALESCE(SUM(CASE WHEN points.type = 'paddling' THEN points.value ELSE 0 END), 0) AS paddling,
  COALESCE(SUM(points.value), 0) AS total

FROM competitors
LEFT JOIN teams ON teams.id = competitors.team_id
LEFT JOIN points ON points.competitor_id = competitors.id
GROUP BY competitors.id, teams.name
ORDER BY total DESC;

  `;

  const result = await pool.query(query);
  return result.rows;
}
