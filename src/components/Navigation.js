import '../css/Navigation.scss';

const Navigation = ({ categories }) => {
    return(
        <div className="navigation lightTheme">
            <div className="div-wrapper">
                <div className="profile">
                    <div className="profile-image"></div>
                    <div className="profile-name">개발자 Mari</div>
                </div>
                <div className="category">
                    <ul>
                        { categories.map((data, index) =>  <li key={index}>{data}</li> ) }
                    </ul>
                </div>
            </div>
            <div className="contact">
                <div className="github">github</div>
                <div>디자이너 Mari</div>
            </div>
        </div>
    )
}
export default Navigation