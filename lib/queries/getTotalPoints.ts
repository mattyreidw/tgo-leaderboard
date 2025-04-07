import pool from '@/lib/db';

export async function getTotalPoints() {
  const query = `
    SELECT COALESCE(SUM(points.value), 0) AS total FROM points;
  `;

  const result = await pool.query(query);
  return result.rows[0];
}
