import create from "zustand";

interface LoginModalState {
  isLoginModalOpen: boolean
  openLoginModal: () => void
  closeLoginModal: () => void
}

export const useLoginModalStore = create<LoginModalState>((set) => ({
  isLoginModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false })
}))
