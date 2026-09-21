import React,{useState} from "react";
import { useAppStore } from "../store/useAppStore";

export default function TaskManager(){
    const [inputVal,setInputVal]=useState('');
    const tasks = useAppStore((state) => Array.isArray(state.tasks) ? state.tasks : []);
  const filter = useAppStore((state) => state.filter) || 'all';
  const addTask = useAppStore((state) => state.addTask);
  const toggleTask = useAppStore((state) => state.toggleTask);
  const deleteTask = useAppStore((state) => state.deleteTask);
  const setFilter = useAppStore((state) => state.setFilter);

    // form Submit
    const handleFormSubmit=(e)=> {
        e.preventDefault();
        addTask(inputVal);
        setInputVal('')
    }

    // filter tasks based on selected state filter
    const filteredTasks=tasks.filter((task)=>{
        if(filter === 'active') return !task.completed;
        if(filter === 'completed') return task.completed;
        return true;  // it gives all 
    })



return(
    <>
    <div style={{ padding: '2rem' }}>
      <h3>📝 Task Manager (Slice Pattern)</h3>

      {/* Add Task Form */}
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        <input 
          type="text"
          placeholder="Enter new task..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
        />
        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Task</button>
      </form>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        {['all', 'active', 'completed'].map((f) => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 12px',
              backgroundColor: filter === f ? '#0284c7' : '#e2e8f0',
              color: filter === f ? 'white' : '#334155',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul style={{ marginTop: '1rem', paddingLeft: '20px' }}>
        {filteredTasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <li key={task.id} style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)} 
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#94a3b8' : 'inherit' }}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
    
    
    
    
    
    </>
)
}