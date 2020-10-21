import React from "react"
import { useSelector } from "react-redux"
import {SingleSub} from "./SingleSub"
export const Subscriptions = () => {
    const allSubscripts = useSelector(state => state);

    return (
        <div className="subs">
            <h4>Subscribed Users</h4>
            <ul>
                {
                    allSubscripts.map((subscript,i) => {
                        return (
                            <li key={i}> #N{i+1}:
                                <SingleSub subscript={subscript} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}