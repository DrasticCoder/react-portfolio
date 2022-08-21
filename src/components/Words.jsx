import {React,useState,useCallback,useEffect} from 'react';

const skills = ['Web developer', 'UI/UX designer', 'DrasticCoder','Programmer']

export default function Words() {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * skills.length);
        setnewName(skills[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <span className='words-change'>{newName}</span>
    )
}