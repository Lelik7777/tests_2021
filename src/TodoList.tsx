export function TodoList() {
    return (
        <div className={'todoList'}>
            <h1></h1>
            <div>
                <input type="text" placeholder={'enter text'} />
                <button>+</button>
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}