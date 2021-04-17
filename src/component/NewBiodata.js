import { React } from "react";


const NewBiodata = (props) => {
    return (
        <div>
            <p>new biodata</p>
            <h3>Nama : {props.nama}</h3>
            <p>Semester :  {props.semester} </p>
            <div>
                {props.hobi}
            </div>
            <p>=========================================</p>
        </div>
    )
}

export default NewBiodata;