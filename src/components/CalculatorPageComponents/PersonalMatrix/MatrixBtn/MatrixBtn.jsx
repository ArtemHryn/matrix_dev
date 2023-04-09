import React from 'react';
import { BtnItem, BtnList, Link } from './MatrixBtn.styled';

const btnList = [
  { name: 'Матрица Судьбы', to: 'fateMatrix' },
  { name: 'кармические задачи', to: 'karmaIssues' },
  { name: 'Матрица Здоровья', to: 'healthMatrix' },
  { name: 'Прогностика', to: 'prognosis' },
];

const MatrixBtn = () => {
  return (
    <BtnList>
      {btnList.map(({ name, to }) => (
        <BtnItem key={name}>
          <Link to={to}>{name}</Link>
        </BtnItem>
      ))}
    </BtnList>
  );
};

export default MatrixBtn;
