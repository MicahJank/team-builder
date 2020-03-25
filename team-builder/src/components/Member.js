import React from 'react';

const Member = (props) => {

    const handleClick = () => {
        props.setMemberToEdit(props.member);
    }

    return (
    <div className="member-card">
        <h3>{props.member.name}</h3>
        <button onClick={handleClick}>edit</button>
    </div>
    )
}

export default Member;