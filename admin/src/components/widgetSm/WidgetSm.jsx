import './widgetSm.css'
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("/users/?new=true")
                setUsers(res.data)
            } catch (err) {}
        }
        getUsers()
    },[])

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Last 5 New Join Users</span>
            <ul className="widgetSmList">
                {users.map((user, index) => (
                    <li className="widgetSmListItem" key={index}>
                        <img
                            src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WidgetSm