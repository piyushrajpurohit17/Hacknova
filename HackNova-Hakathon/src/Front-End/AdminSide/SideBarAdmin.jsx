import { User } from "lucide-react";
import '../AdminSide/SideBarAdmin.css'
import { CalendarCheck } from "lucide-react";
import {  Book } from "lucide-react";
import { BarChart } from "lucide-react";
import { Bell } from "lucide-react";
import { useState } from "react";

function SideBarAdmin() {
    const [ show , setShow ] = useState(true)
 
    return (
        <div className="SideBarAdmin">
            <div className="SideBarAdmin-head">
                <h1>SGU</h1>
                <div className="SideBarAdmin-profile-icon">
                    <User size={40} color="white" strokeWidth={2} />
                </div>
            </div>

            <div className="SideBarAdmin-MainContent">
                <button className="SideBarAdmin-btns" onClick={() => {setShow  ('MainTeacherPage')}} ><CalendarCheck size={20} color="black"   strokeWidth={1} /> Attendence     </button>
                <button className="SideBarAdmin-btns" onClick={() => {setShow  ('MainTeacherPage2')}}><Book size={20} color="black"  strokeWidth={1} />Assigment   </button>
                <button className="SideBarAdmin-btns" onClick={() => {setShow  ('MainTeacherPage3')}}><BarChart size={20} color="black"  strokeWidth={1} />Grade Tracking   </button>
                <button className="SideBarAdmin-btns" onClick={() => {setShow  ('MainTeacherPage4')}}><Bell size={20} color="black"  strokeWidth={1} />Notice </button>
               
            </div>




{show==='MainTeacherPage' && <div className="MainTeacherPage">
    <h1>lakjdfh</h1>
</div>}
{show==='MainTeacherPage2' && <div className="MainTeacherPage2">
    <h1>piyush</h1>
</div>}
{show==='MainTeacherPage3' && <div className="MainTeacherPage3">
    <h1>ajf;akj</h1>
</div>}
{show==='MainTeacherPage4' && <div className="MainTeacherPage4">
    <h1>ertyu</h1>
</div>}
        </div>
    );
}

export default SideBarAdmin;