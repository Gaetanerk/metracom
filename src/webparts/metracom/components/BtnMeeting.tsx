import * as React from 'react';
import { IContextualMenuProps } from '@fluentui/react';

const menuProps: IContextualMenuProps = {
    items: [
      {
        key: 'newMeeting',
        text: 'Nouvelle',
        iconProps: { iconName: 'Flag' },
      },
      {
        key: 'inProgress',
        text: 'En cours',
        iconProps: { iconName: 'ConstructionCone' },
      },
      {
        key: 'Late',
        text: 'En retard',
        iconProps: { iconName: 'Clock' },
      },
      {
        key: 'Finished',
        text: 'Terminées',
        iconProps: { iconName: 'CheckMark' },
      },
    ],
  };

export function BtnMeeting() {
  
    return (
        <DefaultButton
          text="Réunion"
          split
          splitButtonAriaLabel="See 4 options"
          aria-roledescription="split button"
          menuProps={menuProps}
        />
    );
  };