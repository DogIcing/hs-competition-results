import { useState } from "react"
import "./TagDialog.scss"

interface Props {
    onSubmit: (tag: string) => void
}

export function TagDialog({ onSubmit }: Props) {
    const [tag, setTag] = useState('')

    return <div className="tag-dialog">
        <p className="tag-dialog-header">Enter a tag to look up</p>
        <div className="tag-dialog-body">
            <input type="text" value={tag} onChange={e => setTag(e.target.value)} placeholder="e.g. summer_2025" />
            <button
                onClick={() => onSubmit(tag)}
                disabled={!tag.length}
            >Continue</button>
        </div>
    </div>
}