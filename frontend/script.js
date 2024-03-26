document.addEventListener('DOMContentLoaded', () => {
    const staffForm = document.getElementById('staffForm');
    const staffList = document.getElementById('staffList');

    staffForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;

        const staff = { name, position };
        addStaffToList(staff);
        staffForm.reset();
    });

    function addStaffToList(staff) {
        const li = document.createElement('li');
        li.textContent = `${staff.name} - ${staff.position}`;
        staffList.appendChild(li);
    }
});

~
~
