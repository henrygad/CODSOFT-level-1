import { Singlecomment } from '.'
import { useSeeMore } from '../hooks';

type Commentsprops = {
    id: string;
    blogpostId: string;
    commentorUsername: string;
    body: string;
}

const Listsinglecomment = ({ comments, defaultPerLoad = 6}: { comments: Commentsprops[], defaultPerLoad?: number }) => {
    const { perLoad, Displayseemore } = useSeeMore({ arrLength: comments.length, defaultPerLoad })
    return <div className='flex items-start flex-col gap-4'>
        {
            comments && comments.map((comment, index) =>
                index >= perLoad ? '' : <Singlecomment key={comment.id} id={comment.id} body={comment.body} commentorUsername={comment.commentorUsername} />
            )
        }
        <Displayseemore />
    </div>
}

export default Listsinglecomment
