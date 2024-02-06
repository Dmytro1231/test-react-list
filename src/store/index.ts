import { create } from 'zustand'

interface UserState {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}));
