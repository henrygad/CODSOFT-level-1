import { userData } from '../database/userdata'

const useGetUserQuicktInfor = () => {
    return { getUserInfor: ({ finder }: { finder: string }) => userData.find((user) => user.userName === finder)}
}
export default useGetUserQuicktInfor
