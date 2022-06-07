import { SocialProvider } from '@kumi-arts/core';
import { Checkbox, Pane } from 'evergreen-ui';
import { useContext } from 'react';
import { SocialProviderContext } from '../../social-provider-context';
import './provider-select.module.scss';

/* eslint-disable-next-line */
export interface ProviderSelectProps {
  selected: SocialProvider[];
  onChange: (p: SocialProvider[]) => void;
}

export function ProviderSelect({ onChange, selected }: ProviderSelectProps) {
  const { loggedIn } = useContext(SocialProviderContext);

  const onChecked = (provider: SocialProvider) => {
    if (selected.includes(provider)) {
      onChange(selected.filter((p) => p !== provider));
    } else {
      onChange([...selected, provider]);
    }
  };

  const checkboxes = Object.keys(loggedIn)
    .map((key) => key as SocialProvider)
    .filter((p) => loggedIn[p])
    .map((p: SocialProvider) => {
      return (
        <Checkbox
          key={p}
          label={p}
          checked={selected.includes(p)}
          onChange={() => onChecked(p)}
        />
      );
    });

  return (
    <Pane display="flex" gap="1em">
      {checkboxes}
    </Pane>
  );
}

export default ProviderSelect;
