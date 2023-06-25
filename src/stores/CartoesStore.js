import { create } from "zustand";

import { getCartoes } from "../utils/storageCartoes";

export const useCartaoStore = create((set) => ({
  listaCartoes: [],
  fetchCartoes: async () => {
    const cartoes = await getCartoes();
    set({ listaCartoes: cartoes });
  },
}));
