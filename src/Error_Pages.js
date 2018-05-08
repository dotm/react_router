import React from 'react';

function NotFound_404(props){
    return (
        <p className="text-center">Congrats! You found the 404 (Not Found) page!</p>
    )
}

function AccessDenied_401(props){
    const {state} = props.location
    let additional_message = '';
    if(state){
        const referrer = state.referrer
        additional_message = referrer ? `You are not allowed to access ${referrer}!` : ''
    }
    
    return (
        <p className="text-center">Access Denied! {additional_message}</p>
    )
}

export {
    NotFound_404,
    AccessDenied_401
}