import React from "react";

const List = <T extends any>({data, renderEmpty, renderItem}: {
    data: T[];
    renderItem: (source: T) => JSX.Element;
    renderEmpty: () => JSX.Element
}) =>
    !data.length ? (
        renderEmpty()
    ) : (
        <ul>
            {data.map((item, i) =>
                (<li key={i}>{renderItem(item)}</li>))}
        </ul>
    );

const tahoe_peaks = [
    {name: "Freel Peak", elevation: 10891},
    {name: "Monument Peak", elevation: 10067},
    {name: "Pyramid Peak", elevation: 9983}
]

export const ListApp: React.FC = () => {
    return (
        <List data={tahoe_peaks}
              renderItem={item => (
                  <>{item.name} - {item.elevation}</>
              )}
              renderEmpty={() => (
                  <p>Empty</p>
              )}/>
    )
}