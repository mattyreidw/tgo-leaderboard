import pool from '@/lib/db';

export async function getTopCompetitor() {
  const query = `
    SELECT
      competitors.id,
      COALESCE(SUM(points.value), 0) AS total_points
    FROM competitors
    LEFT JOIN points ON points.competitor_id = competitors.id
    GROUP BY competitors.id
    ORDER BY total_points DESC
    LIMIT 1;
  `;

  const result = await pool.query(query);
  return result.rows[0];
}
