import React from 'react';
import { SwitchButton } from './SwitchLanguage.styled';
import { useTranslation } from 'react-i18next';

const SwitchLanguage = () => {
    const { i18n } = useTranslation();
    
  return (
    <SwitchButton>
      <input
        type="checkbox"
        onChange={({ target }) => {
          i18n.changeLanguage(target.checked ? 'ru' : 'ua');
        }}
      />
      <label>
        <span>UA</span>
      </label>
    </SwitchButton>
  );
};

export default SwitchLanguage;
