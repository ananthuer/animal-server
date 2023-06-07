import fetch from 'node-fetch';
import { createConnection } from 'mysql';

const dbConfig = {
  host: '127.0.0.1',
  user: 'ananthuer',
  password: '123456',
  database: 'animals'
};

const connection = createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database!');

  fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(data => {
      const entries = data.entries; // Extract the 'entries' array

      console.log(entries); // Check the entries array

      entries.forEach(entry => {
        const { API, Description, Auth, HTTPS, Cors, Link, Category } = entry;

        // Define the SQL query
        const query = `INSERT INTO animals (API, Description, Auth, HTTPS, Cors, Link, Category) VALUES (?, ?, ?, ?, ?, ?, ?)`;

        // Execute the query with data values
        connection.query(query, [API, Description, Auth, HTTPS, Cors, Link, Category], (err, result) => {
          if (err) {
            console.error('Error inserting data:', err);
            return;
          }
          console.log('Data inserted successfully:', result);
        });
      });

      // Assuming the fetched data is an object containing 'count' and 'entries' properties

      connection.end((err) => {
        if (err) {
          console.error('Error closing database connection:', err);
          return;
        }
        console.log('Database connection closed!');
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
