import '../css/Navigation.scss';

const Navigation = ({ categories }) => {
    return(
        <div className="navigation lightTheme">
            <div className="profile">
                <div className="profile-image"></div>
                <div className="profile-name">개발자 Mari</div>
            </div>
            <div className="category">
                <ul>
                    {
                        categories.map((data, index) => 
                            <li key={index}>{data}</li>
                        )
                    }
                    <li>iOS 스터디 (2)</li>
                    <li>ATC2020 Web 개발 (5)</li>
                    <li>React로 Blog 만들기 (11)</li>
                    <li>ATC2020 Web refactoring (1)</li>
                </ul>
            </div>
            <div className="contact">
                <div>github</div>
                <div>디자이너 Mari</div>
            </div>
        </div>
    )
}
export default Navigation