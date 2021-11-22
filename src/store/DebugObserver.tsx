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
        console.group("action Atom")
        console.log("%c previous state : ",'color: #E6E6FA',getState(previousSnapshot));
        console.log("%c action","color : #00FFFF",);
        console.log("%c next state : ",'color: #bada55',getState(snapshot));
    })

    const getState = (snapShot : Snapshot) => {
        const preValues: any[] = [];
        states.map((item : keyValuePair) => {
            const result = snapShot.getPromise(item.value).then((result : any) => preValues.push({[item.key] : result}))
        })
        return preValues;
    }
   
    return(<></>)
}

export default DebugObserver;
