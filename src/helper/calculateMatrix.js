export function checkNum(num) {
  if (+num > 22) {
    return String(num)
      .split('')
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +num;
}

export function allData(date, isGenerated) {
  const data = {
    ...date,
  };
  Object.keys(data).forEach(
    element => (data[element] = checkNum(data[element]))
  );

  if (!isGenerated) {
    data.bottom1 = checkNum(data.day + data.month + data.year);
    data.center = checkNum(data.day + data.month + data.year + data.bottom1);
    data.topLeft1 = checkNum(data.day + data.month);
    data.topRight1 = checkNum(data.month + data.year);
    data.bottomLeft1 = checkNum(data.day + data.bottom1);
    data.bottomRight1 = checkNum(data.bottom1 + data.year);
  }
  data.bottom3 = checkNum(data.center + data.bottom1);
  data.bottom2 = checkNum(data.bottom3 + data.bottom1);
  data.top3 = checkNum(data.center + data.month);
  data.top2 = checkNum(data.month + data.top3);
  data.left3 = checkNum(data.center + data.day);
  data.left2 = checkNum(data.day + data.left3);
  data.right3 = checkNum(data.year + data.center);
  data.right2 = checkNum(data.year + data.right3);

  data.center2 = checkNum(
    data.topLeft1 + data.topRight1 + data.bottomLeft1 + data.bottomRight1
  );
  data.topLeft3 = checkNum(data.center2 + data.topLeft1);
  data.topLeft2 = checkNum(data.topLeft1 + data.topLeft3);
  data.topRight3 = checkNum(data.center2 + data.topRight1);
  data.topRight2 = checkNum(data.topRight1 + data.topRight3);
  data.bottomLeft3 = checkNum(data.center2 + data.bottomLeft1);
  data.bottomLeft2 = checkNum(data.bottomLeft1 + data.bottomLeft3);
  data.bottomRight3 = checkNum(data.center2 + data.bottomRight1);
  data.bottomRight2 = checkNum(data.bottomRight1 + data.bottomRight3);

  data.innerTopLeft = checkNum(data.left3 + data.top3);
  data.innerTopRight = checkNum(data.right3 + data.top3);
  data.innerBottomLeft = checkNum(data.bottom3 + data.left3);
  data.innerBottomRight = checkNum(data.bottom3 + data.right3);

  data.innerTop1 = checkNum(data.top3 + data.innerTopLeft);
  data.innerTop2 = checkNum(data.center + data.top3);
  data.innerTop3 = checkNum(data.top3 + data.innerTopRight);

  data.innerLeft1 = checkNum(data.left3 + data.innerTopLeft);
  data.innerLeft2 = checkNum(data.center + data.left3);
  data.innerLeft3 = checkNum(data.left3 + data.innerBottomLeft);

  data.innerRight1 = checkNum(data.right3 + data.innerTopRight);
  data.innerRight2 = checkNum(data.center + data.right3);
  data.innerRight3 = checkNum(data.right3 + data.innerBottomRight);

  data.innerBottom1 = checkNum(data.bottom3 + data.innerBottomLeft);
  data.innerBottom2 = checkNum(data.center + data.bottom3);
  data.innerBottom3 = checkNum(data.bottom3 + data.innerBottomRight);

  return data;
}

export const assignCalc = info => {
  const data = { ...info };

  data.sky = checkNum(data.bottom1 + data.month);
  data.earth = checkNum(data.day + data.year);
  data.personal = checkNum(data.sky + data.earth);

  data.father = checkNum(data.topLeft1 + data.bottomRight1);
  data.mother = checkNum(data.topRight1 + data.bottomLeft1);
  data.social = checkNum(data.father + data.mother);

  data.spirit = checkNum(data.personal + data.social);
  data.planet = checkNum(data.social + data.spirit);
  data.insidePower = checkNum(data.center + data.center2);
  return data;
};
