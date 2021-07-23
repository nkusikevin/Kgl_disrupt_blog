import "./widgetSm.css";
import { ArrowUpward  } from "@material-ui/icons";

export default function WidgetSm() {
  return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>Trendig Posts</span>
			<ul className='widgetSmList'>
				<li className='widgetSmListItem'>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Daily Developer Deals</span>
						<span className='widgetSmUserTitle'>Shyaka Eric</span>
					</div>
					<button className='widgetSmButton'>
						<ArrowUpward className='widgetSmIcon' />
						3k
					</button>
				</li>
				<li className='widgetSmListItem'>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>
							10 Important website for Devs
						</span>
						<span className='widgetSmUserTitle'>Tumukunde Steven</span>
					</div>
					<button className='widgetSmButton'>
						<ArrowUpward className='widgetSmIcon' />
						3k
					</button>
				</li>
				<li className='widgetSmListItem'>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Visit Rwanda</span>
						<span className='widgetSmUserTitle'>John Doe</span>
					</div>
					<button className='widgetSmButton'>
						<ArrowUpward className='widgetSmIcon' />
						3k
					</button>
				</li>
				<li className='widgetSmListItem'>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Trip to Space By Elon</span>
						<span className='widgetSmUserTitle'>Kevin</span>
					</div>
					<button className='widgetSmButton'>
						<ArrowUpward className='widgetSmIcon' />
						3k
					</button>
				</li>
				<li className='widgetSmListItem'>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>100DaysCode Challenge</span>
						<span className='widgetSmUserTitle'>Anna Keller</span>
					</div>
					<button className='widgetSmButton'>
						<ArrowUpward className='widgetSmIcon' />
						3k
					</button>
				</li>
			</ul>
		</div>
	);
}
