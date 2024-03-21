/*
const getAllUsersQuery = 'SELECT * FROM captain_carebuddy';
const insertUserQuery = 'INSERT INTO captain_carebuddy (id,captain_id,carebuddy_id,is_active,created_at,updated_at) VALUES ($1, $2, $3, $4, $5, $6)';
const updateUserQuery = 'UPDATE captain_carebuddy SET captain_id = $1, carebuddy_id = $2, is_active = $3, created_at = $4, updated_at = $5 WHERE id = $6';
const deleteUserQuery = 'DELETE from captain_carebuddy where id=$1';


const getAllrolesQuery = 'SELECT * FROM roles';
const insertrolesQuery = 'INSERT INTO roles (id,name,position,created_at,updated_at) VALUES ($1, $2, $3, $4, $5)';
const updaterolesQuery = 'UPDATE roles SET  name = $1, position = $2, created_at = $3, updated_at = $4 WHERE id = $5';
const deleterolesQuery = 'DELETE from roles where id=$1';


module.exports = {
  getAllUsersQuery,
  insertUserQuery,
  updateUserQuery,
  deleteUserQuery,
  getAllrolesQuery,
  insertrolesQuery,
  updaterolesQuery,
  deleterolesQuery
};


*/


const prayojanaqueries = {
  captainCarebuddy: {
    getAllUsersQuery: 'SELECT * FROM captain_carebuddy',
    insertUserQuery: 'INSERT INTO captain_carebuddy (id, captain_id, carebuddy_id, is_active, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)',
    updateUserQuery: 'UPDATE captain_carebuddy SET captain_id = $1, carebuddy_id = $2, is_active = $3, created_at = $4, updated_at = $5 WHERE id = $6',
    deleteUserQuery: 'DELETE from captain_carebuddy where id=$1'
  },
  roles: {
    getAllRolesQuery: 'SELECT * FROM roles',
    insertRolesQuery: 'INSERT INTO roles (id, name, position, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)',
    updateRolesQuery: 'UPDATE roles SET name = $1, position = $2, created_at = $3, updated_at = $4 WHERE id = $5',
    deleteRolesQuery: 'DELETE from roles where id=$1'
  }
};

module.exports = prayojanaqueries;

