import React from 'react';
import { observer } from 'mobx-react';
import storeInstance from '../../store/Store'

export const Comments = observer(() => {
    return (
        <table className="table">
            <tbody>
                {
                    storeInstance.comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {comment}
                                </td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )

})