import create from 'zustand';

const useFileUploadStore = create((set) => ({
  progress: 0,
  setProgress: () =>
    set((state) => {
      return { progress: state.progress + 1 };
    }),
}));

export default useFileUploadStore;
