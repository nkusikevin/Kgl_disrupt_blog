import React from 'react'
import MasonaryPost from './MasonaryPost'
function PostMasonary({post,column,tagsOnTop}) {
    return (
        <section className="masonary" style={{gridTemplateColumns:`repeat(${column},minmax(275px,1fr))`}}>
          {post.map((post,index)=>
          <MasonaryPost {...{post,index,tagsOnTop,key:index}}/>
          )}  
        </section>
    )
}

export default PostMasonary
