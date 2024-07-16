// contexts/LoginModalContext.js
import React, { createContext, ReactNode, useContext, useState } from 'react'
interface LoginModalContextType {
  isLoginModalOpen: boolean
  openLoginModal: () => void
  closeLoginModal: () => void
}

const LoginModalContext = createContext<LoginModalContextType | undefined>(undefined)

interface LoginModalProviderProps {
  children: ReactNode
}
export const LoginModalProvider: React.FC<LoginModalProviderProps> = ({ children }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false)

  const openLoginModal = () => {
    setLoginModalOpen(true)
  }
  const closeLoginModal = () => {
    setLoginModalOpen(false)
  }

  return (
    <LoginModalContext.Provider
      value={{ isLoginModalOpen, openLoginModal, closeLoginModal }}
    >
      {children}
    </LoginModalContext.Provider>
  )
}
export const useLoginModal = (): LoginModalContextType => {
  const context = useContext(LoginModalContext)

  if (!context) {
    throw new Error('useLoginModal must be used within a LoginModalProvider')
  }
  return context
}
