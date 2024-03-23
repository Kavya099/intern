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
  },
  household_plan:{
    getAllhousehold_planQuery: 'SELECT * FROM household_plan',
    inserthousehold_planQuery: 'INSERT INTO household_plan(id, plan_id, start_date, end_date, plan_amount, plan_type, payment_type, payment_id, client_id, created_at, updated_at, plan_status, plan_paused_on, plan_activated_on) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
    updatehousehold_planQuery: 'UPDATE household_plan SET payment_type = $1 WHERE id = $2',
    deletehousehold_planQuery: 'DELETE from household_plan where id=$1'

  }
};

module.exports = prayojanaqueries;

