window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value
        if (!task) {
            alert('please fill out the task')
        }
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
})
