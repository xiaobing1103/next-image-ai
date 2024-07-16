import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
  height?: string;
  center?: boolean;
  width?: number;
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  width = 600,
  height = "auto",
  center = false,
}: ModalProps) {
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      setShow(true);
      timer = setTimeout(() => setAnimation(true), 10); // Slight delay to trigger animation
    } else {
      setAnimation(false);
      timer = setTimeout(() => setShow(false), 300); // Animation duration
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {show && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${
            animation ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOutsideClick}
        >
          <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${
              animation ? "translate-y-0" : "translate-y-10"
            }`}
            style={{
              height,
              top: center ? "50%" : "100px",
              transform: center ? "translateY(-50%)" : "none",
              position: center ? "fixed" : "absolute",
              width: width,
            }}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                &times;
              </button>
            </div>
            <div className="p-4">{children}</div>
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={onClose}
                className="px-4 mr-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
              >
                关闭
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
