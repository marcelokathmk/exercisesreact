import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Silva">
        <Member name="Guilherme"/>
        <Member name="Julia"/>
        <Member name="Rafael"/>
    </Family>,
    document.getElementById('app'))