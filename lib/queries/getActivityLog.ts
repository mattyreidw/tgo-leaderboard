import pool from '@/lib/db';

export async function getActivityLog() {
  const result = await pool.query(`
    SELECT
      points.id,
      points.competitor_id,
      points.type,
      points.value::float,
      points.date
    FROM points
    ORDER BY points.date DESC
  `);

  return result.rows;
}
