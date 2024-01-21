import React from 'react'

const page = () => {
    return (
        <div className='caseBox'>
            <div className='caseType'>CIVIL CASE</div>
            <div className='caseTitle'>NAME vs CASE AGAINST</div>
            <div className='caseLeft'>
                <span className='caseLeft'>date</span>
                <span className='caseState'>court, state</span>
            </div>
            <div className='classDesc'>Description</div>
        </div>
    )
}

export default page
