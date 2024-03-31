import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketHistory.scss';

import Header from '../../HomePages/Header';
import MenuGroup from '../MenuGroup';

const TicketHistory = () => {

    return (
        <div>
            <Header />
            <div class="card overflow-hidden">
                <div class="row no-gutters row-bordered row-border-light">
                    <div className='menu-group-frame col-md-3'>
                        <MenuGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketHistory