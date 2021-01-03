import React from "react";
import Image from 'material-ui-image';

import { observer } from "mobx-react";
import imageStore from '../../store/ImageStore'

export const MainImage = observer(() => {
    return (
        <Image
            src={imageStore.imageUrl}
            alt="..." />
    )
})