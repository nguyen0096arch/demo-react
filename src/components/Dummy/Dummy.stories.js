import React from 'react';

import Dummy from './Dummy';

export default {
    title: 'Dummy',
    component: Dummy,
}

const Template = (args) => {
    return (
        <Dummy {...args} />
    )
}

export const Default = Template.bind({});