import { create } from 'zustand';

import { extratos } from '../utils/extratos';

export const useExtratoStore = create((set) => ({
  extrato: extratos,
}));
