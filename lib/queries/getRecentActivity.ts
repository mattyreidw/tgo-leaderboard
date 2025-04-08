// lib/queries/getRecentActivity.ts
import pool from '@/lib/db';

export async function getRecentActivity(limit = 5) {
  const query = `
    SELECT 
      points.value,
      points.type,
      points.date,
      competitors.id AS competitor_id
    FROM points
    JOIN competitors ON competitors.id = points.competitor_id
    ORDER BY points.date DESC
    LIMIT $1
  `;

  const result = await pool.query(query, [limit]);
  return result.rows;
}
