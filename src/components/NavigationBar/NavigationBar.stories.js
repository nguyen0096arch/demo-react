import React from 'react';

import NavigationBar from './NavigationBar';

export default {
    title: 'Navigation Bar',
    component: NavigationBar,
}

const navTree = [
    {
        label: 'Car',
        to: '/car'
    },
    {
        label: 'Train',
        to: '/train',
        children: [
            {
                label: 'TGV',
                to: '/train/tgv'
            },
            {
                label: 'Normal',
                to: '/train/normal'
            },
        ]
    },
]

const path = [];

const Template = (args) => {
    return (
        <NavigationBar />
    )
}

export const Default = Template.bind({});