
const useCopyLinkBtn = ({authorUserName, slug}: {authorUserName: string, slug: string}) => {
    const handleCopyLink =()=>{
        navigator.clipboard.writeText(`http://localhost:5173/${authorUserName}/${slug}/post`)
        .then(()=>console.log('copied'))
        .catch((err)=> console.log(err))
     }
  return {copyLink: handleCopyLink}
}

export default useCopyLinkBtn
