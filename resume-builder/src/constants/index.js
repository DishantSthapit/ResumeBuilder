import { ReactComponent as EasyToUse } from '../assets/images/svg/easyToUse.svg';
import { ReactComponent as Template } from '../assets/images/svg/template.svg';
import { ReactComponent as Fast } from '../assets/images/svg/fast.svg';
import sampleThumbnail from '../assets/images/resumeexample.png';

export const FACILITY_ITEMS = [
    { label: "Easy to Use", img: <EasyToUse className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { label: "Multiple Templates", img: <Template className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { label: "Fast", img: <Fast className="facilityIcon"/>, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," }
]

export const TEMPLATES =[
    {id:"0", label:"Template 1", heading: 'Eye Catching', thumbnail:sampleThumbnail, info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:"1", label:"Template 2", heading: 'Fresh', thumbnail:sampleThumbnail, info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:"2", label:"Template 3", heading: 'Legend', thumbnail:sampleThumbnail, info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
]


export const STEPBAR =[
    {id:0, label:"Get Started", route:"/"},
    {id:1, label:"Choose Template", route:"/template"},
    {id:2, label:"Add Details", route:"/"},
    {id:3, label:"Done", route:"/"},
]