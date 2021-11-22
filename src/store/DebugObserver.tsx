import { RecoilState, Snapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import React, { useEffect, useMemo, useState } from 'react';

interface observerProps {
    states: (RecoilState<string> | RecoilState<object[]> | RecoilState<number>)[]
}

interface keyValuePair {
    key: string,
    value: RecoilState<any>
}


const DebugObserver = ({ states }: any) => {
    useRecoilTransactionObserver_UNSTABLE(({ snapshot, previousSnapshot }) => {
        console.group("action Atom")
        console.log("%c previous state : ", 'color: #E6E6FA', getState(previousSnapshot));
        console.log("%c action", "color : #00FFFF", changedState(snapshot));
        console.log("%c next state : ", 'color: #bada55', getState(snapshot));
    })

    const getState = (snapShot: Snapshot) => {
        const values: any[] = [];
        states.map((item: keyValuePair) => {
            snapShot.getPromise(item.value).then((result: any) => values.push({ [item.key]: result }));
        })
        return values;
    }

    const changedState = (snapShot: Snapshot) => {
        let result : any[] = [];
        states.map((item: keyValuePair) => {
            let snapshotInfo = snapShot.getInfo_UNSTABLE(item.value);
            if (snapshotInfo.isModified) {
                result.push({ [item.key]: snapshotInfo.loadable?.contents })
            }
        })
        return result;
    }

    return (<></>)
}

export default DebugObserver;
