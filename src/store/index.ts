import { proxy } from 'valtio';

interface StateI {
  isHamburgerOpen: boolean;
  notifications: {
    id: number;
    message: string;
  }[];
}

export const state: StateI = proxy({
  isHamburgerOpen: false,
  notifications: [],
});
