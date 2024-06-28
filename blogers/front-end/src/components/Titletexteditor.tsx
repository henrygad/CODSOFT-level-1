import React, { useState, useRef, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const Titletexteditor = ({ title }: { title: string }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [toJS, setToJS] = useState<Draft.RawDraftContentState>()

    useEffect(() => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        setToJS(rawContentState)
    }, [editorState])


    return {
        Displaytitleeditor: () => <div className="App">
            <Editor
                toolbarOnFocus
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="bg-transparent"
                editorClassName="min-h-[30px] px-4 border rounded"
                toolbarClassName="border-none p-0 bg-transparent text-stone-900"
                placeholder='Title...'
                toolbar={{
                    options: ['inline'],
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

        </div>, titleContextJS: toJS
    }
}

export default Titletexteditor
