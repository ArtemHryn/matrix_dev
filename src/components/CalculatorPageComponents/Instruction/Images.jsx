import { useTranslation } from 'react-i18next';
import { Img } from './Instruction.styled';

import mob_integrity_ua from 'images/Calculator/instruction/mobile_integrity.webp';
import mob_integrity_ru from 'images/Calculator/instruction/mobile_integrity_ru.webp';
import mob_instruction_ua from 'images/Calculator/instruction/mobile_instruction.webp';
import mob_instruction_ru from 'images/Calculator/instruction/mobile_instruction_ru.webp';

const Images = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Img
        src={i18n.language === 'ua' ? mob_integrity_ua : mob_integrity_ru}
        alt="Мобілка з інтегріті"
        top={['8%', null, '-10%']}
        left={['-7%', '0%', '5%']}
      />
      <Img
        src={i18n.language === 'ua' ? mob_instruction_ua : mob_instruction_ru}
        alt="Мобілка з інстрікцією"
        top={['25%', null, '7%']}
        left={['40%', null, '42%']}
        width={['245px', '450px', '520px']}
        delay={'5s'}
      />
    </>
  );
};

export default Images;
