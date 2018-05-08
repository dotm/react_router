import React from 'react';
import { Route, Link } from "react-router-dom";

function Executive_Profile (props){
    const {match} = props
    const {executive} = match.params
    return (
        <p>Our {executive.toUpperCase()} is awesome! He has [insert corporate speak here]</p>
    )
}

export default function About(props){
    const { match } = props
    return (
        <div className="text-center">
            <p>So, about this company... [insert corporate speak here]</p>
            
            <Link to={`${match.url}/ceo`}>CEO</Link>&nbsp;&nbsp;&nbsp;
            <Link to={`${match.url}/cto`}>CTO</Link>&nbsp;&nbsp;&nbsp;
            <Link to={`${match.url}/cmo`}>CMO</Link>&nbsp;&nbsp;&nbsp;
            <Link to={`${match.url}/cfo`}>CFO</Link>&nbsp;&nbsp;&nbsp;

            <Route path={`${match.url}/:executive`} component={Executive_Profile} />
        </div>
    )
}