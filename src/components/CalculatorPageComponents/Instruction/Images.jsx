import { Img } from './Instruction.styled';

import mob_integrity from 'images/Calculator/instruction/mobile_integrity.webp';
import mob_instruction from 'images/Calculator/instruction/mobile_instruction.webp';

const Images = () => {
  return (
    <>
      <Img
        src={mob_integrity}
        alt="Мобілка з інтегріті"
        top={['8%', null, '-10%']}
        left={['-7%', '0%', '0%']}
      />
      <Img
        src={mob_instruction}
        alt="Мобілка з інстрікцією"
        top={['30%', null, '7%']}
        left={['40%', null, '39%']}
        width={['245px', '450px', '590px']}
      />
    </>
  );
}

export default Images
