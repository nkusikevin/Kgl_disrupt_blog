import React, { useEffect } from "react";
import trending from "../assets/mocks/trending";
import PostMasonary from "../components/PostMasonary";
import featured from "../assets/mocks/featured";
import MasonaryPost from "../components/MasonaryPost";
import PostGrid from "../components/PostGrid";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/articleActions";
import Loader from "../components/Loader";
const trendingConfig = {
	1: {
		gridArea: "1/2/3/3",
	},
};
const featuredConfig = {
	0: {
		gridArea: "1/1/2/3",
		height: "300px",
	},
	1: {
		height: "300px",
	},
	3: {
		height: "630px",
		marginLeft: "30px",
		width: "630px",
	},
};
const margeStyles = function (post, config) {
	post.forEach((post, index) => {
		post.style = config[index];
		post.author = "nkusi_kev";
		post.description =
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quis rem molestiae quisquam voluptates iusto recusandae voluptate. Sit, adipisci placeat.";
	});
};
margeStyles(trending, trendingConfig);
margeStyles(featured, featuredConfig);
const lastpost = featured.pop();
function Home() {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articles);
	const { loading, posts } = articles;
	useEffect(() => {
		dispatch(listPosts());
	}, [dispatch]);
	console.log("type = " + typeof posts);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<main className='home'>
					<section className='container '>
						<div className='row'>
							<section className='featured-post-container'>
								<PostMasonary post={featured} column={2} tagsOnTop={true} />
								<MasonaryPost post={lastpost} tagOnTop={true} />
							</section>
						</div>
					</section>
					<section className='bg-white'>
						<section className='container '>
							<div className='row'>
								<h1>Recent Post</h1>
								<PostGrid post={posts} />
							</div>
						</section>
					</section>
					<section className='container '>
						<div className='row'>
							<PostMasonary post={trending} column={3} />
						</div>
					</section>
				</main>
			)}
		</>
	);
}

export default Home;
