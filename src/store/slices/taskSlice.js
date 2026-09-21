export const createTaskSlice=(set)=>({

    // state variables
    tasks:[],
    filter:'all',


    //  Action: Add a new task object
    addTask:(title)=>{
        if(!title.trim()) return;
        const newTask={
            id:Date.now(),
            title,
            completed:false
        };
        set((state)=> ({tasks:[newTask, ...state.tasks]}))
    },


    // Action: Toggle task completion status
    toggleTask:(taskId)=>{
        set((state)=>({
            tasks:state.tasks.map((task)=>
            task.id === taskId ? {...task,completed: !task.completed}:task),
        }));
    },

    // Action : Delete a atsk by ID
    deleteTask:(taskId)=>{
        set((state)=>({
            tasks:state.tasks.filter((task)=> task.id !== taskId)
        }))
    },
    // Action: Change current view filter
    setFilter:(filter)=> set({filter}),
})