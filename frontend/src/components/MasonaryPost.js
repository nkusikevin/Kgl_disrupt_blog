import React from 'react'
import Tag_Row from './Tag_row'
function MasonaryPost({post,tagOnTop}) {
    const windowWidth = window.innerWidth
    const imageBackground = {backgroundImage:`url(${require(`../assets/images/${post.image}`).default})`}
    const style = windowWidth > 900 ? {...imageBackground , ...post.style} :imageBackground
    return (
           <a className="masonary-post overlay" style={style} href={post.link}>
                <div className="image-text" style={{justifyContent: tagOnTop ? "space-between" : "flex-end"}}>
                    <Tag_Row tag={post.categories}/>
               <div>
                   <h2 className="image-title">{post.title}</h2>
                   <span className='image-date'>{post.date}</span>
               </div>
           </div>
           </a> 
          
       
    )
}

export default MasonaryPost
