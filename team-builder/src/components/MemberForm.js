import React, { useState, useEffect } from 'react';

const MemberForm = ({ setMemberList, memberList, memberToEdit }) => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        role: ''
    });

    useEffect(() => {
        setInputs(memberToEdit)
    }, [memberToEdit])

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log("onSubmit -> memberList", memberList)
        console.log("onSubmit -> inputs", inputs)
        setMemberList([
            ...memberList,
            inputs
        ])
        setInputs({
            name: '',
            email: '',
            role: ''
        })
    }
    return (
        <form>
            <input placeholder='Enter name' type='text' name='name' value={inputs.name || ''} onChange={handleChange} />
            <input placeholder='Enter email' type='email' name='email' value={inputs.email || ''} onChange={handleChange} />
            <select name='role' value={inputs.role || ''} onChange={handleChange}>
                <option value='FrontEnd Engineer'>FrontEnd Engineer</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='UX'>UX</option>
            </select>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default MemberForm;