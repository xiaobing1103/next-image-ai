import React, { useEffect } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/modal'
import { Button, Tab, Tabs } from '@nextui-org/react'
import Accountlogin from '../AccountLogin'
import { useLoginModal } from '@/app/contexts/LoginModalContext'
import QrcodeLogin from '../QrcodeLogin'

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal } = useLoginModal()
  const { isOpen, onOpen, onClose } = useDisclosure({
    isOpen: isLoginModalOpen
  })

  useEffect(() => {
    if (isLoginModalOpen) {
      onOpen()
    } else {
      onClose()
    }
  }, [isLoginModalOpen])

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeLoginModal} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">登录</ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options">
                    <Tab key="qrcode" title="微信登录">
                      <QrcodeLogin />
                    </Tab>
                    <Tab key="accountLogin" title="账户登录">
                      <Accountlogin />
                    </Tab>
                    <Tab key="register" title="注册账户">
                      注册账户注册账户注册账户注册账户注册账户
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  关闭
                </Button>
                <Button color="primary" onPress={onClose}>
                  登录
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
