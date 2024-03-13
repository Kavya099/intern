const client = require('../connection');
const queries = require('../queries');

// Get all users
const getAllUsers = (req, res) => {
    client.query(queries.getAllUsersQuery, (err, result) => {
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
    const { id, captain_id, carebuddy_id, is_active, created_at, updated_at } = req.body;

    // Check if required fields are provided
    if (!id || !captain_id || !carebuddy_id || is_active === undefined || !created_at || !updated_at) {
        return res.status(400).send('All fields are required');
    }

    const values = [id, captain_id, carebuddy_id, is_active, created_at, updated_at];

    client.query(queries.insertUserQuery, values, (err, result) => {
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
    const { id, captain_id, carebuddy_id, is_active, created_at, updated_at } = req.body;

    // Check if required fields are provided
    if (!id || !captain_id || !carebuddy_id || is_active === undefined || !created_at || !updated_at) {
        return res.status(400).send('All fields are required');
    }

    const values = [captain_id, carebuddy_id, is_active, created_at, updated_at, id];

    client.query(queries.updateUserQuery, values, (err, result) => {
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
    client.query(queries.deleteUserQuery, [id], (err, result) => {
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
