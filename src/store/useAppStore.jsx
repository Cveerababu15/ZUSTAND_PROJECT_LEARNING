import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCartSlice } from './slices/cartSlice';
import { createTaskSlice } from './slices/taskSlice';
import { createUiSlice } from './slices/uiSlice';

export const useAppStore = create(
    persist(
        (...a) => ({
            ...createUiSlice(...a),
            ...createCartSlice(...a),
            ...createTaskSlice(...a),
        }),
        {
            name: 'app-global-storage',
            // Ensure partialize only captures valid default structures
            partialize: (state) => ({
                theme: state.theme || 'light',
                cart: Array.isArray(state.cart) ? state.cart : [],
                tasks: Array.isArray(state.tasks) ? state.tasks : [],
                filter: state.filter || 'all',
            }),
        }
    )
);