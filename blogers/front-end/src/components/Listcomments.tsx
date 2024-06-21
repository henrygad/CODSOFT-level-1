import { Singlecomment } from '.'

type Commentsprops = {
    id: string;
    blogpostId: string;
    commentorUsername: string;
    body: string;
}

const Listsinglecomment = ({ comments }: { comments: Commentsprops[] }) => {
    return <div className='flex items-start flex-col gap-4'>
        {
            comments && comments.map((comment) =>
                <Singlecomment key={comment.id} id={comment.id} body={comment.body} commentorUsername={comment.commentorUsername} />
            )
        }
    </div>
}

export default Listsinglecomment
