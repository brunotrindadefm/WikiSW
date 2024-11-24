import { create } from "zustand";

interface DataState {
  selectedData: { imageUrl: string; title: string; subtitle: string; type: string } | null;
  setSelectedData: (selectedData: any) => void;
}

const useDataStore = create<DataState>((set) => ({
  selectedData: null,
  setSelectedData: (selectedData) => set({ selectedData }),
}));

export default useDataStore;