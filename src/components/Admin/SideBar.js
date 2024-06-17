import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}> Dashboard </MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem> component 1 </MenuItem>
                        <MenuItem> component 2 </MenuItem>
                    </SubMenu>

                </Menu>
            </ProSidebar>;
        </div>
    )
}
export default SideBar;