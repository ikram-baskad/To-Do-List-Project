(() => {
  const STORAGE_KEY = 'sparkle-todos-v1'

  const input = document.getElementById('todo-input')
  const addBtn = document.getElementById('add-btn')
  const listEl = document.getElementById('todo-list')

  let todos = []

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      todos = raw ? JSON.parse(raw) : []
    } catch (e) {
      todos = []
    }
  }

  function createTodoElement(todo) {
    const li = document.createElement('li')
    li.className = 'todo-item'
    li.dataset.id = todo.id

    const left = document.createElement('div')
    left.className = 'todo-left'

    const check = document.createElement('button')
    check.className = 'check' + (todo.done ? ' checked' : '')
    check.innerHTML = todo.done ? '✓' : ''
    check.title = todo.done ? 'Mark as not done' : 'Mark as done'
    check.addEventListener('click', () => toggleDone(todo.id))

    const text = document.createElement('div')
    text.className = 'todo-text' + (todo.done ? ' completed' : '')
    text.textContent = todo.text

    left.appendChild(check)
    left.appendChild(text)

    const del = document.createElement('button')
    del.className = 'icon-btn'
    del.innerHTML = '🗑️'
    del.title = 'Delete'
    del.addEventListener('click', () => removeTodo(todo.id))

    li.appendChild(left)
    li.appendChild(del)

    return li
  }

  function render() {
    listEl.innerHTML = ''
    if (todos.length === 0) {
      const empty = document.createElement('div')
      empty.style.color = '#b57a95'
      empty.style.padding = '12px'
      empty.textContent = 'No todos yet — add something sparkly ✨'
      listEl.appendChild(empty)
      return
    }

    todos.forEach(t => listEl.appendChild(createTodoElement(t)))
  }

  function addTodo(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    const todo = { id: Date.now().toString(), text: trimmed, done: false }
    todos.unshift(todo)
    save()
    render()
  }

  function removeTodo(id) {
    todos = todos.filter(t => t.id !== id)
    save()
    render()
  }

  function toggleDone(id) {
    todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    save()
    render()
  }

  addBtn.addEventListener('click', () => {
    addTodo(input.value)
    input.value = ''
    input.focus()
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo(input.value)
      input.value = ''
    }
  })

  // init
  load()
  render()
})()
