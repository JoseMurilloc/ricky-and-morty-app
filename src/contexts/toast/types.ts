export type ToastProps = {
  message: string;
};

export type Status = 'success' | 'error' | 'default';

export interface ToastContextData {
  status: Status;
  message: string;
  isShow: boolean;
  showToast({messageToast, statusToast}: ShowToastParams): void;
  duration: number;
  hideToast: () => void;
}

export type ShowToastParams = {
  messageToast: string;
  statusToast: Status;
  durationToast?: number;
};
