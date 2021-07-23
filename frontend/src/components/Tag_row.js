import React from 'react'
import {categoryColors} from './styles'
function Tag_row({tag}) {
    return (
        <div className="tags-container">
                            <span className="tag" style={{backgroundColor:categoryColors[tag]}}>
                                {tag}
                            </span>
                    </div>
    )
}

export default Tag_row
