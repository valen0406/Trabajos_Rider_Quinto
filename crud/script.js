let editingIndex = null;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  form.addEventListener("submit", saveUser);
  renderUsers();
});

function saveUser(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) return;

  const users = getUsers();

  if (editingIndex !== null) {
    users[editingIndex] = { name, email };
    editingIndex = null;
  } else {
    users.push({ name, email });
  }

  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("userForm").reset();
  renderUsers();
}

function renderUsers() {
  const users = getUsers();
  const table = document.getElementById("userTable");
  table.innerHTML = "";

  users.forEach((user, index) => {
    const row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td class="actions">
          <button onclick="editUser(${index})">Editar</button>
          <button class="delete" onclick="deleteUser(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function deleteUser(index) {
  const users = getUsers();
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function editUser(index) {
  const users = getUsers();
  document.getElementById("name").value = users[index].name;
  document.getElementById("email").value = users[index].email;
  editingIndex = index;
}
