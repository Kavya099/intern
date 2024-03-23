const client = require('../connection');
const queries = require('../queries');

// Get all users
const getAllUsers = (req, res) => {
    client.query(queries.household_plan.getAllhousehold_planQuery, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error fetching users');
        } else {
            res.send(result.rows);
        }
    });
};

// Insert a new user
const insertUser = (req, res) => {
    const {id, plan_id, start_date, end_date, plan_amount, plan_type, payment_type, payment_id, client_id, created_at, updated_at, plan_status, plan_paused_on, plan_activated_on} = req.body;

    // Check if required fields are provided
    if (!id || !plan_id || !start_date || !end_date || !plan_amount || !plan_type || !payment_type || !payment_id || !client_id || !created_at || !updated_at || !plan_status || !plan_activated_on || !plan_paused_on) {
        return res.status(400).send('All fields are required');
    }

    const values = [id, plan_id, start_date, end_date, plan_amount, plan_type, payment_type, payment_id, client_id, created_at, updated_at, plan_status, plan_paused_on, plan_activated_on];

    client.query(queries.household_plan.inserthousehold_planQuery, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error inserting user');
        } else {
            res.status(201).send('User inserted successfully');
        }
    });
};

// Update a user
const updateUser = (req, res) => {
    const {id,payment_type} = req.body;

    // Check if required fields are provided
    const values = [payment_type,id];

    client.query(queries.household_plan.updatehousehold_planQuery, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error updating user');
        } else {
            res.status(200).send('User updated successfully');
        }
    });
};

// Delete a user
const deleteUser = (req, res) => {
    const { id } = req.body;
    client.query(queries.household_plan.deletehousehold_planQuery, [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error deleting user');
        } else {
            res.send('User deleted successfully');
        }
    });
};

module.exports = {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser
};


