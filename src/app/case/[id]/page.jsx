'use client'
import { Client, Databases} from 'appwrite';
export const client = new Client();
import { useEffect,useState } from 'react';

const page = ({ params })  => {
    const id=params.id;
    const [data,setdata]=useState();
    const [displayData, setDisplay] = useState(false);
    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('legalsarthi');

    const databases = new Databases(client);

    useEffect(() => {
        const promise = databases.getDocument(
            'legalsarthi',
            'cases',
            id
        );
    
        promise.then(function (response) {
            setdata(response);
            setDisplay(true);
        }, function (error) {
            console.log(error);
        });
    }, []);


    const display = () => {
        return <div>
            <div className='caseType'>{data.casetype} CASE</div>
            <div className='caseTitle'>{data.litigantname} vs {data.opposinglitigant}</div>
            <div className='caseLeft'>
                <span className='caseLeft'>Date: {data.dateofcase}</span>
                <span className='caseState'>{data.casecourt}, {data.state}</span>
            </div>
            <div className='classDesc'>{data.casedescription}</div>
        </div>
    }

    return (
        <div className='caseBox'>
            {displayData ? display() : "Loading"}
        </div>
    )
}

export default page
