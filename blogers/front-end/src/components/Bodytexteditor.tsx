import React, { useState, useRef, useEffect } from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Editor } from 'react-draft-wysiwyg';
import DOMPurify from 'dompurify'
import { useUploadImage } from '../hooks';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Bodytexteditor = ({ body }: { body?: string }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [toHTML, setToHTML] = useState('')
    const [toJS, setToJS] = useState<Draft.RawDraftContentState>()


    useEffect(() => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        setToJS(rawContentState)
        const html = draftToHtml(rawContentState);
        setToHTML(html)
    }, [editorState])


    function createMarkup(html: string) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    const handleNumberOfWords = ()=>{
        const words: number = toJS?.blocks[0].text.split(' ').length
        if (words -1 ) return (words -1 )
        else (words -1)
    }

    return {
        Displaybodyeditor: () => <div className="relative">
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="p-1 border rounded"
                editorClassName="min-h-[400px] px-4 "
                toolbarClassName="p-1 border bg-transparent text-stone-800"
                placeholder='What happening...'
                toolbar={{
                    image: {
                        urlEnabled: true,
                        uploadEnabled: true,
                        alignmentEnabled: true,
                        uploadCallback: (file: Blob) => useUploadImage({ file }).then((image) => image).catch((error) => console.log(error)),
                        previewImage: true,
                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                        alt: { present: true, mandatory: false },
                        defaultSize: {
                            height: '300px',
                            width: '400px',
                        },
                    },
                }}

                hashtag={{
                    separator: ' ',
                    trigger: '#',
                }}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    suggestions: [
                        { text: 'JavaScript', value: 'javascript', url: 'js' },
                        { text: 'Golang', value: 'golang', url: 'go' },
                    ],
                }}
            />
            <div className='absolute right-2 bottom-2 text-stone-400 '>{handleNumberOfWords()}</div>
        </div>, bodyContextJS: toJS
    }
}

export default Bodytexteditor
