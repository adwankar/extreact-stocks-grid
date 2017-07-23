import React, { Component } from 'react';
import stocks from '../data/stocks';
import { Grid, Column, Button, RendererCell, Container, SparkLineLine, TitleBar, Menu, MenuItem, SelectField } from '@extjs/ext-react';

export default class StocksGrid extends Component {
    
    constructor() {
        super();
        this.store = new Ext.data.Store({
            data: stocks,
            autoLoad: true,
            sorters: [{
                property: 'name'
            }],
        })
    }

    render() {
        return (
           <Grid store={this.store}>
                <Column dataIndex="name" text="Name" width={300} />
                <Column dataIndex="symbol" text="Symbol" />
                <Column dataIndex="ticks" text="Trend" />
                <Column dataIndex="sector" text="Sector" width={200} />
                <Column dataIndex="industry" text="Industry" width={350} />
            </Grid>
        );
    }

}