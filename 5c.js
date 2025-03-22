Javascript Code:
// Select the table body and button
const userTableBody = document.querySelector('#userTable tbody');
const loadUsersButton = document.getElementById('loadUsers');

// Function to make an AJAX request to a placeholder API
function loadUsers() {
  const xhr = new XMLHttpRequest();
  
  // Open a GET request to the JSON placeholder API (fake data)
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      bindData(users);
    } else {
      console.error('Failed to load users');
    }
  };

  xhr.send();
}

// Function to bind the data into the table
function bindData(users) {
  userTableBody.innerHTML = ''; // Clear previous data

  users.forEach(user => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    `;

    userTableBody.appendChild(row);
  });
}

// Add event listener to load users when the button is clicked
loadUsersButton.addEventListener('click', loadUsers);