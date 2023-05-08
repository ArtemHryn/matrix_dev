import { BtnItem, BtnList, Link } from './MatrixBtn.styled';
import { useMatrix } from 'pages/Calculator';

const btnList = [
  { name: 'Матрица Судьбы', to: 'fateMatrix' },
  { name: 'кармические задачи', to: 'karmaIssues' },
  { name: 'Матрица Здоровья', to: 'healthMatrix' },
  { name: 'Прогностика', to: 'prognosis' },
];

const MatrixBtn = () => {
  const { setMatrixType, matrixType } = useMatrix();
  return (
    <BtnList>
      {btnList.map(({ name, to }) => (
        <BtnItem key={name}>
          <Link
            className={matrixType === to ? 'active' : null}
            onClick={() => setMatrixType(to)}
          >
            {name}
          </Link>
        </BtnItem>
      ))}
    </BtnList>
  );
};

export default MatrixBtn;
