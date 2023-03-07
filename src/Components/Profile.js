
import React from 'react'
import U from '../Img/U.png'

const Profile = () => {
    return (

        <div className="P">
            <h1>Student Profile</h1>
            <img src={ U } alt="Student Profile Picture" />
            <h2>Personal Information</h2>
            <p>Name: John Doe</p>
            <p>Student ID: 1234567</p>
            <p>Email: john.doe@student.edu</p>
            <p>Phone: 123-456-7890</p>
            <h2>Academic Information</h2>
            <p>Major: Computer Science</p>
            <p>GPA: 3.5</p>
            <p>Expected Graduation Date: May 2024</p>
            <p>Academic Advisor: Jane Smith</p>
            <h2>Extracurricular Activities</h2>
            <ul>
                <li>President of Computer Science Club</li>
                <li>Volunteer at Local Food Bank</li>
                <li>Intramural Soccer Player</li>
            </ul>
        </div>

    );
}

export default Profile;