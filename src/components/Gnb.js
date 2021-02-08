import '../css/Gnb.scss'

const Gnb = ({ category, article }) => {
    return(
        <div className="gnb lightTheme">
            <div className="flex-row-wrapper">
                <div className="category-title">{category}</div>
                <div className="article-title">{article}</div>
                <button className="show-articles">down</button>
            </div>
        </div>
    )
}
export default Gnb