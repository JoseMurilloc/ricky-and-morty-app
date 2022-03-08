import React, {useContext, useState} from 'react';
import {createContext} from 'react';
import {ShowToastParams, Status, ToastContextData} from './types';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export function ToastProvider({children}: any) {
  const [status, setStatus] = useState<Status>('default');
  const [message, setMessage] = useState('Mensagem default');
  const [isShow, setIsShow] = useState(false);
  const [duration, setDuration] = useState(400);

  const hideToast = () => {
    setIsShow(false);
    setDuration(400);
    setMessage('Mensagem default');
    setStatus('default');
  };

  function showToast({
    messageToast,
    statusToast,
    durationToast = 400,
  }: ShowToastParams) {
    setIsShow(true);
    setMessage(messageToast);
    setStatus(statusToast);
    setDuration(durationToast);
  }

  return (
    <ToastContext.Provider
      value={{
        status,
        message,
        isShow,
        showToast,
        duration,
        hideToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}
