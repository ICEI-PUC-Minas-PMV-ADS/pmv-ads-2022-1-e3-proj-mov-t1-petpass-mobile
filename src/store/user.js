import create from 'zustand'

const useUser = create((set) => ({
    user: false,
    setIsUser: (user) =>
        set((state) => ({
            ...state,
            user,
        })),
}))

export default useUser
