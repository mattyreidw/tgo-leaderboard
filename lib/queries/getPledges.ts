// lib/queries/getPledges.ts
import pool from '@/lib/db';

export async function getPledges() {
  const result = await pool.query(`
    SELECT id, value::float
    FROM pledges
    ORDER BY value DESC
  `);
  return result.rows; // [{ id: ..., value: ... }, ...]
}
