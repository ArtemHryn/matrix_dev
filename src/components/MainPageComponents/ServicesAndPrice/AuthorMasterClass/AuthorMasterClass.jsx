import { useTranslation, Trans } from 'react-i18next';
import { Box } from 'components/Box';
import {
  AuthorMasterClassTitle,
  MasterClassList,
  SecondTitlePart,
} from './AuthorMasterClass.styled';
import { MasterClassCard } from './MasterClassCard/MasterClassCard';
import getMasterClass from 'helper/masterClass';

export const AuthorMasterClass = () => {
  const { i18n } = useTranslation();
  return (
    <Box>
      <AuthorMasterClassTitle>
        <Trans i18nKey="masterClassTitle">
          Авторские <SecondTitlePart>мастер-классы</SecondTitlePart>
        </Trans>
      </AuthorMasterClassTitle>
      <MasterClassList>
        {getMasterClass(i18n.language).map(
          ({ title, img, services, format, duration, price, btn }) => (
            <MasterClassCard
              title={title}
              img={img}
              services={services}
              format={format}
              duration={duration}
              price={price}
              btn={btn}
              key={title}
            />
          )
        )}
      </MasterClassList>
    </Box>
  );
};
