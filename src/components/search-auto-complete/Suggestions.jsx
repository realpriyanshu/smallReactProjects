export default function Suggestion({ userNames }) {

    return (
        <div>
            {userNames && userNames.length > 0 ?
                (<div>
                    {userNames.map((item, ind) => (
                        <li key={ind}>{item}</li>
                    ))}
                </div>)
                : null}

        </div>
    )


}