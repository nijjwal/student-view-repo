import React, {useContext} from 'react';
import {UserContext} from '../App';


export default function ComponentF(){

    const x = useContext(UserContext);

    return(<>
       Welcome {x};
    </>);

}