const client = require('../connection');
const queries = require('../queries');

// Get all users
const getAllUsers = (req, res) => {
    client.query(queries.getAllrolesQuery, (err, result) => {
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
    const { id, name, position, created_at, updated_at } = req.body;

    // Check if required fields are provided
    if (!id || !name || !position || !created_at || !updated_at) {
        return res.status(400).send('All fields are required');
    }

    const values = [id, name, position, created_at, updated_at];

    client.query(queries.insertrolesQuery, values, (err, result) => {
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
    const { id,name, position, created_at, updated_at} = req.body;

    // Check if required fields are provided
    if (!id || !name || !position || !created_at || !updated_at) {
        return res.status(400).send('All fields are required');
    }

    const values = [name, position, created_at, updated_at,id];

    client.query(queries.updaterolesQuery, values, (err, result) => {
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
    client.query(queries.deleterolesQuery, [id], (err, result) => {
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


