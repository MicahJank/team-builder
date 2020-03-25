import React, { useState } from 'react';

import Member from './Member.js';

const Members = ({ memberList, setMemberToEdit }) => {
    
    return (
        memberList.map(member => {
            return <Member key={member.name} member={member} setMemberToEdit={setMemberToEdit} />
        })
    )
}

export default Members;