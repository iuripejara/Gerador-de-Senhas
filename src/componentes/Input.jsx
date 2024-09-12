import { useState } from "react"

export default function Input(props) {

    return(
        <input
        type="number"
        id="asswordsize"
        min={1}
        value={props.passwordSize}
        onChange={(ev) =>props.setPassowordsize(ev.target.value)}
    />
    )
}