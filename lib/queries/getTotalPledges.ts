import pool from '@/lib/db';

export async function getTotalPledges() {
  const query = `
    SELECT COALESCE(SUM(value), 0) AS total FROM pledges;
  `;

  const result = await pool.query(query);
  return result.rows[0];
}
