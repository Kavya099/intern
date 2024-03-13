const getAllUsersQuery = 'SELECT * FROM captain_carebuddy';
const insertUserQuery = 'INSERT INTO captain_carebuddy (id,captain_id,carebuddy_id,is_active,created_at,updated_at) VALUES ($1, $2, $3, $4, $5, $6)';
const updateUserQuery = 'UPDATE captain_carebuddy SET captain_id = $1, carebuddy_id = $2, is_active = $3, created_at = $4, updated_at = $5 WHERE id = $6';
const deleteUserQuery = 'DELETE from captain_carebuddy where id=$1';

module.exports = {
  getAllUsersQuery,
  insertUserQuery,
  updateUserQuery,
  deleteUserQuery
};


