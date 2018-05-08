import React from 'react';

function NotFound_404(props){
    return (
        <p className="text-center">Congrats! You found the 404 (Not Found) page!</p>
    )
}

function AccessDenied_401(props){
    const routing_state = props.location.state
    let additional_message = '';
    if(routing_state){
        const referrer = routing_state.referrer
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