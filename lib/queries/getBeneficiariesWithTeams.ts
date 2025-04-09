import pool from '@/lib/db';

export async function getBeneficiariesWithTeams() {
  const result = await pool.query(`
    SELECT 
      beneficiary_name,
      -- Get the first non-null link or null if none
      MAX(beneficiary_link) AS beneficiary_link,
      MAX(beneficiary_blurb) AS beneficiary_blurb,
      ARRAY_AGG(name ORDER BY name) AS teams
    FROM teams
    WHERE beneficiary_name IS NOT NULL
    GROUP BY beneficiary_name
    ORDER BY beneficiary_name
  `);

  return result.rows;
}
