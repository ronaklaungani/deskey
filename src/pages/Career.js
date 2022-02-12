import React, { useState } from 'react';
import {useParams } from 'react-router-dom'

function Career() {

    let { name } = useParams();

    return (
        <h1>Page for {name}</h1>
    );
}

export default Career;