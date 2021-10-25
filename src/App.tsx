import './App.css';
import {TodoList} from "./TodoList";


export type TaskType={
    id:number;
}
function App() {
    return (
        <div className="App">
            <TodoList/>
        </div>
    );
}

export default App;
