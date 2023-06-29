import { useState } from 'react';
import { SwitchButton } from './SwitchLanguage.styled';
import { useTranslation } from 'react-i18next';

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language !== 'ua');

  return (
    <SwitchButton checked={checked}>
      <input
        type="checkbox"
        onChange={({ target }) => {
          i18n.changeLanguage(target.checked ? 'ru' : 'ua');
          setChecked(target.checked);
        }}
        checked={i18n.language !== 'ua'}
      />
      <label>
        <span>UA</span>
      </label>
    </SwitchButton>
  );
};

export default SwitchLanguage;
