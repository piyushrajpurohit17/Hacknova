import { useState } from 'react';
import SideBarAdmin from '../AdminSide/SideBarAdmin'
import '../TeacherPage/TeacherPage.css'

function TeacherPage() {

    const [ show , setShow ] = useState(true)
 
    return (
        
        <div className="TeacherPage">
            
            <SideBarAdmin />
           { show==='MainTeacherPage' && <div className='MainTeacherPage'>
                <h1 className='Main-TeacherPage-h1'>Teachers</h1>
                <div className='Main-TeacherPage-Content'>
                    <div className='Main-TeacherPage-Content-inputs'>  <div className='Main-TeacherPage-class'>
                        <label>Enter Class : </label>
                        <input type="text" name="className" placeholder='Class1' />
                      </div>
                        <div className='Main-TeacherPage-class'>
                            <label>Enter Type : </label>
                            <input type="text" name="className" placeholder='student' />
                        </div>
                        <div className='Main-TeacherPage-class'>
                            <label>Enter Date : </label>
                            <input type="text" name="className" placeholder='DD/MM/YYYY' />
                        </div>

                        <button className='MainTeacherPage-submit-btn'>Take Attendence</button>
                    </div>
                    
                </div>
             </div>}
            
        </div>
    );
}

export default TeacherPage;