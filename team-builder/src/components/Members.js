import React, { useState } from 'react';

import Member from './Member.js';

const Members = () => {
    const [memberList, setMemberList] = useState([
        {
            name: 'Micah',
            email: 'micah@test.com',
            role: 'backend engineer'
        },
    ]);
    
    return (
        memberList.map(member => {
            return <Member member={member} />
        })
    )
}

export default Members;