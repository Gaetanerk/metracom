import * as React from 'react';
import styles from './Metracom.module.scss';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { useState } from 'react'
import { BtnMeeting } from './BtnMeeting';

export function BtnDetails() {
    return (
        <DefaultButton className={styles.btnDetails} text="Détails" />
    )
}