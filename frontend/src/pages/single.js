import React from 'react'
import trending from '../assets/mocks/trending'
import Tag_Row from '../components/Tag_row'
function single() {
    const data = trending.pop()
    const style = {backgroundImage:`url(${require(`../assets/images/${data.image}`).default})`}
    return (
       <main>
         <section className="site-cover same-height single-page overlay " style={style} >
               <div className="post-entry">
                <div className="image-tag">
                    <Tag_Row tags={data.categories}/></div>
                    <div className="name-title" style={{color:"white"}}>
                   <h2 className="image-title">{data.title}</h2>
                   <span>BY {data.author} -</span>
                   <span className='image-date'>{data.date}</span></div>
           </div>
           </section> 
           <section className="body-section">
               <div className="left-side">{data.description}</div>
               <div className="right-side">
                   <div className="author-section">
                       <img src={require(`../assets/images/person_2.jpg`).default} alt="profile"/>
                       <h1>{data.author}</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos magni est accusamus eum ducimus facilis deserunt incidunt distinctio illo, dolorum vero non suscipit reiciendis?</p>
                   <button className="btn-bio"> Read My Bio</button>
                   </div>
                   <div className="popular-post">
                       <h2>Popular Post</h2>
                       <hr/>
                       {trending.map((post,index)=>(
                           <div className="popular" key={index}>
                               <img src={require(`../assets/images/${post.image}`).default}/>
                               <div className="post-body">
                                   <h3>{post.title}</h3>
                                   <p style={{color:'#999'}}>{post.date}</p>
                               </div>
                           </div>
                       ))}
                   </div>
                   <div className="categories">
                       <h2>Categories</h2>
                       <hr/>
                   </div>
               </div>
           </section>
           <section className="comment-section">
                <h3 class="mb-5">Leave a comment</h3>
                
           </section>
       </main>
    )
}

export default single
