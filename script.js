function addTodo() {
    myTodos.innerHTML += `
        <li>${todoField.value}</li>
    `;
    todoField.value = '';

}
function deleteTodo() {
    myTodos.innerHTML = '';
}
function exportTodos() {
    const todos = Array.from(myTodos.children).map(li => li.textContent);
    const blob = new Blob([todos.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todos.txt';
    a.click();
    URL.revokeObjectURL(url);
}
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.addEventListener('load', function () {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});