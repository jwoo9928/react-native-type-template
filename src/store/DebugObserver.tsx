import React, { useRef, useState } from 'react';
import { RecoilState, Snapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { textState, walletStates } from './atoms';

interface observerProps  {
    states :  (RecoilState<string> | RecoilState<object[]> | RecoilState<number>)[]
}

interface keyValuePair {
    key : string,
    value :  RecoilState<any>
}


const DebugObserver = ({states} : any) => {
    useRecoilTransactionObserver_UNSTABLE(({ snapshot, previousSnapshot }) => {
        console.log("%c previous state : ",'color: #bada55',getPreState(previousSnapshot));
        console.log("%c next state : ",'color: #ff0000 ',getNextState(snapshot));
    })

    const getPreState = (snapShot : Snapshot) => {
        const preValues: any[] = [];
        states.map((item : keyValuePair) => {
            const result = snapShot.getPromise(item.value).then((result : any) => preValues.push({[item.key] : result}))
        })
        return preValues;
    }
    const getNextState = (snapShot : Snapshot) => {
        const nextValues: any[] = [];
        states.map((item : keyValuePair) => {
            snapShot.getPromise(item.value).then((result : any) => nextValues.push({[item.key] : result}))
        })
        return nextValues
    }
    return(<></>)
}

export default DebugObserver;
