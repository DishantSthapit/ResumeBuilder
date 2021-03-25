import React from 'react';

export const useSetLoader = (time) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(()=> {
        setTimeout(()=>{
            setLoading(false); 
        },time)
    },[]);

    return loading;
}   
