import faker from "faker"
import * as React from 'react';
import {FixedSizeList, ListChildComponentProps} from "react-window";

const bigList = [...Array(5000)].map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
}))

export const BigList: React.FC = () => {
    const renderRow = ({index, style}: ListChildComponentProps) => (
        <div style={{...style, ...{display: "flex"}}}>
            <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
            <p>
                {bigList[index].name} - {bigList[index].email}
            </p>
        </div>
    )

    return (
        <FixedSizeList itemSize={50} height={window.innerHeight} itemCount={bigList.length}
                       width={window.innerWidth - 20}>
            {renderRow}
        </FixedSizeList>
    )
}