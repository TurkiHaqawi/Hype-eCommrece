import './topBar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const TopBar = () => {
    return ( 
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="tobIconBadge">20</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="tobIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvater" />
                </div>
            </div>
        </div>
     );
}
 
export default TopBar;