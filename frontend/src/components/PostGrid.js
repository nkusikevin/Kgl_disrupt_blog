import React,{useEffect,useState,useMemo} from 'react'
import {Pagination} from "antd"
import {Link} from "react-router-dom"
import TagRow from './Tag_row'
function PostGrid({post}) {
    const [pageSize,setPageSize] = useState(9)
    const [current,setCurrent] =useState(1)
    const paginatedPosts = useMemo(()=>{
        const lastindex = current * pageSize
        const firstindex = lastindex-pageSize
        return post.slice(firstindex,lastindex)
    },[current, pageSize])
    useEffect(() => {
       window.scroll({
           top:500,
           left:0,
           behavior:'smooth'
       })
    }, [current, pageSize])
console.log("postgrid"+post.image)
    return (
			<section className='grid-pagination-container'>
				<section className='post-grid container'>
					{paginatedPosts.map((post, index) => (
						<div className='post-container' key={index}>
							<figure>
								<Link to={post.link}>
									<img src={post.image} alt={post.image} />
								</Link>
							</figure>
							<TagRow tag={post.categories} />
							<h2>{post.title}</h2>
							<p className='author-text'>
								<span>
									By:
									<Link to={`/authors/${post.author}`} className='name'>
										{post.author}
									</Link>
								</span>
								<span>-{post.date}</span>
							</p>
							<p className='description-text'>{post.description}</p>
							<Link to={post.link}>Read more......</Link>
						</div>
					))}
				</section>
				<Pagination
					simple
					showSizeChanger
					onShowSizeChange={setPageSize}
					pageSize={pageSize}
					total={post.length}
					defaultCurrent={current}
					onChange={setCurrent}
				/>
			</section>
		);
}

export default PostGrid
