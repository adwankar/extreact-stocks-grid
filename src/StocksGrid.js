import React, { Component } from 'react';
import stocks from '../data/stocks';
import { Grid, Column, Button, RendererCell, Container, SparkLineLine, TitleBar, Menu, MenuItem, SelectField } from '@extjs/ext-react';

export default class StocksGrid extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
           <Grid>
                <Column dataIndex="name" text="Name" width={300} />
                <Column dataIndex="symbol" text="Symbol" />
                <Column dataIndex="ticks" text="Trend" />
                <Column dataIndex="sector" text="Sector" width={200} />
                <Column dataIndex="industry" text="Industry" width={350} />
            </Grid>
        );
    }

}