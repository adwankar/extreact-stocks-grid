import React, { Component } from 'react';
import { Container } from '@extjs/ext-react';
import StocksGrid from './StocksGrid';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');


export default function App() {
    return (
        <Container fullscreen layout="fit">
            <StocksGrid/>
        </Container>
    )
}
