import create from 'zustand';

const useFileUploadStore = create((set) => ({
  progress: 0,
  setProgress: () =>
    set((state) => {
      if (state.progress == 100) {
        setTimeout(
          (_) => {
            return { progress: 0 };
          },
          [3000]
        );
        return;
      }
      return { progress: state.progress + 1 };
    }),
}));

export default useFileUploadStore;
