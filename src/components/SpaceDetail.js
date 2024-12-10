import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const SpaceDetail = () => {
    const { id } = useParams()
    const [spaceInfo, setSpaceInfo] = useState({})
    const getSpaceInfo = async () => {
        try {
            const {data, status} = await axios.get(`https://localhost/api/space/${id}`)
            if (status === 200) {
                setSpaceInfo(data.body)
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getSpaceInfo()
    }, []);
    return (
        <div>
            {spaceInfo.name}
        {/*  todo 12/10  */}
        </div>
    );
};

export default SpaceDetail;