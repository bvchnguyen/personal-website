import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";

export const MenuItems = [
    {
        title: 'HOME',
        url: '#',
        cName: 'Nav-links',
        itemIcon: <GrHomeRounded />
    },
    {
        title: 'ABOUT',
        url: '#',
        cName: 'Nav-links',
        itemIcon: <AiOutlineUser size="20px" style={{ marginBottom: "5px"}}/>
    },
    {
        title: 'PROJECT',
        url: '#',
        cName: 'Nav-links', 
        itemIcon: <BiCodeCurly style={{
            position: 'relative',
            top:'10%'
        }}/>
    },
    {
        title: 'CONTACT',
        url: '#',
        cName: 'Nav-links',
        itemIcon: <AiOutlineMail />
    },
]