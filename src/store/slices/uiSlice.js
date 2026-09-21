export const createUiSlice=
    (set)=>({
        // State: Current Them Mode
        theme:'light',

        // State : Sidebar Visibility
        isSidebarOpen:false,

        // Action : Toggle Between light and Dark themes
        toggleTheme:()=>
            set((state)=>({
                theme:state.theme === 'light' ? 'dark' : 'light',
            })),

            // Action: Toggle Sidebar Open or Closed
            toggleSidebar:()=>
                set((state)=>({
                    isSidebarOpen: !state.isSidebarOpen,
                })),
    });
