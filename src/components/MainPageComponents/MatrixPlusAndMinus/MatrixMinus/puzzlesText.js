const puzzlesTextMinus = lng => {
  return [
    {
      text:
        lng === 'ua'
          ? 'не вмієш відмовляти іншим'
          : 'не умеешь отказывать другим',
      xm: '26px',
      ym: '30px',
      xt: '262px',
      yt: '128px',
      xd: '220px',
      yd: '120px',
      maxWidth: '109px',
      maxWidthTab: '160px',
      maxWidthDesc: '120px',
    },
    {
      text:
        lng === 'ua'
          ? 'не розумієш своє призначення'
          : 'не понимаешь свое предназначение',
      xm: '180px',
      ym: '40px',
      xt: '480px',
      yt: '600px',
      xd: '400px',
      yd: '520px',
      rt: '-6deg',
      maxWidth: '104px',
      maxWidthTab: '185px',
      maxWidthDesc: '180px',
    },
    {
      text:
        lng === 'ua'
          ? 'не можеш розкрити свій потенціал'
          : `не можешь раскрыть свой потенциал`,
      xm: '17px',
      ym: '180px',
      xt: '258px',
      yt: '340px',
      xd: '220px',
      yd: '300px',
      maxWidth: '106px',
      maxWidthTab: '160px',
      maxWidthDesc: '125px',
    },
    {
      text:
        lng === 'ua'
          ? 'не приймаєш, не цінуєш себе'
          : 'не принимаешь, не ценишь себя',
      xm: '170px',
      ym: '195px',
      xt: '35px',
      yt: '147px',
      xd: '23px',
      yd: '120px',
      maxWidth: '118px',
      maxWidthTab: '160px',
      maxWidthDesc: '140px',
    },
    {
      text:
        lng === 'ua'
          ? 'постійно потрапляєш у неприємні ситуації'
          : 'постоянно попадаешь в неприятные ситуации',
      xm: '10px',
      ym: '365px',
      xt: '44px',
      yt: '328px',
      xd: '23px',
      yd: '280px',
      r: '-6deg',
      maxWidth: '137px',
      maxWidthTab: '160px',
      maxWidthDesc: '120px',
    },
    {
      text:
        lng === 'ua'
          ? 'постійно перебуваєш у стані тривоги'
          : 'постоянно находишься в состоянии тревожности',
      xm: '183px',
      ym: '316px',
      xt: '504px',
      yt: '124px',
      xd: '432px',
      yd: lng === 'ua' ? '115px' : '100px',
      rt: '18deg',
      maxWidth: '83px',
      maxWidthTab: '160px',
      maxWidthDesc: '120px',
    },

    {
      text:
        lng === 'ua'
          ? 'не знаєш, куди рухатися і чим займатися'
          : 'не знаешь куда двигаться и чем заниматься',
      xm: '184px',
      ym: '509px',
      xt: '520px',
      yt: '367px',
      xd: '450px',
      yd: '310px',
      r: '-3deg',
      maxWidth: '109px',
      maxWidthTab: '160px',
      maxWidthDesc: '130px',
    },
    {
      text:
        lng === 'ua'
          ? 'не можеш знайти спільну мову з близькими людьми'
          : 'не можешь найти общий язык с близкими людьми',
      xm: '184px',
      ym: '509px',
      xt: '270px',
      yt: '530px',
      xd: '225px',
      yd: '450px',
      r: '-3deg',
      maxWidth: '109px',
      maxWidthTab: '112px',
      maxWidthDesc: '120px',
    },
  ];
};

export default puzzlesTextMinus;
