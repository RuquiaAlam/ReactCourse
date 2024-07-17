import "./App.css";
import { useState, useRef,useEffect } from "react";
import Task from "./Task";
import ComponetLifeCycle from "./ComponetLifeCycle";
import FetchAPI from "./FetchAPI";
import FindAge from "./FindAge";
import GenerateAnExcuse from "./GenerateAnExcuse";
function App() {

  const[showText,setShowText]=useState(false);
  const [newTask, setNewtask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const buttonRef = useRef(null);
  const handleChange = (e) => {
    setNewtask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  useEffect(() => {
    console.log("Component Mounted!");

    return ()=>
    {
       console.log("Component unmounted!")


    }
  }, []);
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input
          ref={buttonRef}
          type="text"
          onChange={handleChange}
          placeholder="enter"
        />

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, index) => (
          <div>
            <Task
              name={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed}
              index={index}
            />
          </div>
        ))}
      </div>
      <button onClick={() => setShowText(!showText)}>showText</button>
      {showText && <ComponetLifeCycle />}
    
      <FindAge/>
      <GenerateAnExcuse/>
    </div>
  );
}

export default App;
