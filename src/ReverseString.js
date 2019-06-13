import React from 'react';

export const ReverseString = (x) => {
    for(var i = x.length - 1, o = ''; i >= 0; o += x[i--]) {}
    return o;
}