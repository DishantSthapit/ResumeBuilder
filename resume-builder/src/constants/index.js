import { ReactComponent as EasyToUse } from '../assets/images/svg/easyToUse.svg';
import { ReactComponent as Template } from '../assets/images/svg/template.svg';
import { ReactComponent as Fast } from '../assets/images/svg/fast.svg';

export const FACILITY_ITEMS = [
    { label: "Easy to Use", img: <EasyToUse className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { label: "Multiple Templates", img: <Template className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { label: "Fast", img: <Fast className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," }
]

export const TEMPLATES =[
    {id:"0", label:"Template 1"},
    {id:"1", label:"Template 2"},
    {id:"2", label:"Template 3"},
]