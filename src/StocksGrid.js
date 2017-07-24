import React, { Component } from 'react';
import stocks from '../data/stocks';
import { Grid, Column, Button, RendererCell, Container, SparkLineLine, TitleBar, Menu, MenuItem, SelectField } from '@extjs/ext-react';

Ext.require([
    'Ext.Toast'
]);

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

    actionsRenderer = (value, record) => {
        return (
            <Button text="Buy" ui="round" className="x-item-no-select" handler={this.buy.bind(this, record)}/>
        )
    }

    buy = (record) => {
        Ext.toast(`Buy ${record.get('symbol')}`);
    }

    render() {
        return (
           <Grid store={this.store}>
                <Column renderer={this.actionsRenderer} ignoreExport/>
                <Column dataIndex="name" text="Name" width={300} cell={ { style: {fontWeight:'bold'}}} />
                <Column dataIndex="symbol" text="Symbol" renderer={value => <b>{value}</b>} />
                <Column dataIndex="ticks" text="Trend" />
                <Column dataIndex="sector" text="Sector" width={200} />
                <Column dataIndex="industry" text="Industry" width={350} />
            </Grid>
        );
    }

}