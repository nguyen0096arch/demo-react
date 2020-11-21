import React from 'react';

import NavigationBar from './NavigationBar';


export default {
    title: 'Navigation Bar',
    component: NavigationBar,
}

const navTree = [
    {
        id: 'car',
        label: 'Car',
        children: [
            {
                id: 'toyota',
                label: 'Toyota',
            },
            {
                id: 'honda',
                label: 'Honda',
            },
        ]
    },
    {
        id: 'train',
        label: 'Train',
        children: [
            {
                id: 'tgv',
                label: 'TGV',
            },
            {
                id: 'normal',
                label: 'Normal train',
                children: [
                    {
                        id: 'test',
                        label: 'test level 3',
                    },
                    {
                        id: 'test_but_not_used',
                        label: 'test level 3 (not used)',
                    },
                ]
            },
        ]
    }
]

const Template = (args) => {
    return (
        <NavigationBar {...args} />
    )
}

export const Default = Template.bind({});
Default.args = {
    navTree: navTree,
    path: ['train', 'normal'],
}