import useContextAuthentication from "./useContextAuthentication"

const useIsAccountOwner = ({ authorizedUser }: { authorizedUser: string }) => {
    const {loginUser} = useContextAuthentication()

    let isOwnerOfAccount = false
    if (loginUser === authorizedUser) {
        isOwnerOfAccount = true
        return {isOwnerOfAccount}
    } else return {isOwnerOfAccount}
}

export default useIsAccountOwner
