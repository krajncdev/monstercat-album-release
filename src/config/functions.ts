import { state } from '../store';

export const addNotification = (message: string) => {
  const id = Date.now();
  state.notifications.push({ id, message });

  setTimeout(() => {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== id
    );
  }, 2000);
};
