import pool from '@/lib/db';

export async function getTopTeam() {
  const query = `
    SELECT
      teams.name,
      COALESCE(SUM(points.value), 0) AS total_points
    FROM teams
    LEFT JOIN competitors ON competitors.team_id = teams.id
    LEFT JOIN points ON points.competitor_id = competitors.id
    GROUP BY teams.id
    ORDER BY total_points DESC
    LIMIT 1;
  `;

  const result = await pool.query(query);
  return result.rows[0];
}
