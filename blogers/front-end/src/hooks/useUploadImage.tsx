
type Props ={
    data: {link: string | ArrayBuffer}
}

const useUploadImage = ({file}:{file: Blob}) => {

    const promise = new Promise<Props>((resolve, reject) =>{
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = function (e) {
            if (!e.target?.result) {
                return reject('no image was added')
            } else {
                return resolve({ data: { link: e.target?.result } })
            }
        }
    })

    return promise
}

export default useUploadImage
