// База тренировок «Строгий режим».
// level: 1 — Новичок, 2 — База, 3 — Продвинутый.
// id — номер урока из ссылки, должен быть уникальным.
// После правок зайди в кабинет куратора → «База тренировок» → «Синхронизировать с Firestore».
window.WORKOUTS = [
  // ── Раскрываем женственность ──
  {"id": "339556004", "level": 2, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556004"},
  {"id": "339556005", "level": 3, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556005"},
  {"id": "339556006", "level": 1, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556006"},
  {"id": "339556007", "level": 3, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556007"},
  {"id": "339556008", "level": 2, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556008"},
  {"id": "339556009", "level": 2, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556009"},
  {"id": "339556010", "level": 1, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556010"},
  {"id": "339556011", "level": 1, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556011"},
  {"id": "339556012", "level": 2, "program": "Раскрываем женственность", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556012"},

  // ── Учимся танцевать ──
  {"id": "339556013", "level": 2, "program": "Учимся танцевать", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556013"},
  {"id": "339556014", "level": 2, "program": "Учимся танцевать", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556014"},
  {"id": "339556015", "level": 1, "program": "Учимся танцевать", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556015"},
  {"id": "339556016", "level": 1, "program": "Учимся танцевать", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556016"},

  // ── Шагай и танцуй ──
  {"id": "339556409", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556409"},
  {"id": "339556678", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339556678"},
  {"id": "339563556", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339563556"},
  {"id": "339563563", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339563563"},
  {"id": "339563627", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339563627"},
  {"id": "339563649", "level": 1, "program": "Шагай и танцуй", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339563649"},

  // ── Танцевальный фитнес ──
  {"id": "339564306", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339564306"},
  {"id": "339564311", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339564311"},
  {"id": "339564781", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339564781"},
  {"id": "339564790", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339564790"},
  {"id": "339565035", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565035"},
  {"id": "339565045", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565045"},
  {"id": "339565055", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565055"},
  {"id": "339565061", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565061"},
  {"id": "339565065", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565065"},
  {"id": "339565082", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565082"},
  {"id": "339565091", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565091"},
  {"id": "339565098", "level": 2, "program": "Танцевальный фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339565098"},

  // ── В стиле Тай-Бо ──
  {"id": "339673617", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339673617"},
  {"id": "339673628", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339673628"},
  {"id": "339673632", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339673632"},
  {"id": "339673914", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339673914"},
  {"id": "339673970", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339673970"},
  {"id": "339674011", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339674011"},
  {"id": "339674121", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339674121"},
  {"id": "339674535", "level": 2, "program": "В стиле Тай-Бо", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339674535"},

  // ── Лимфодренажные тренировки ──
  {"id": "339675418", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675418"},
  {"id": "339675435", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675435"},
  {"id": "339675501", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675501"},
  {"id": "339675514", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675514"},
  {"id": "339675529", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675529"},
  {"id": "339675535", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675535"},
  {"id": "339675574", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675574"},
  {"id": "339675606", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675606"},
  {"id": "339675614", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675614"},
  {"id": "339675676", "level": 2, "program": "Лимфодренажные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339675676"},

  // ── Шагательная табата ──
  {"id": "339687741", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687741"},
  {"id": "339687745", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687745"},
  {"id": "339687747", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687747"},
  {"id": "339687749", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687749"},
  {"id": "339687752", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687752"},
  {"id": "339687774", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339687774"},
  {"id": "339688041", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688041"},
  {"id": "339688053", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688053"},
  {"id": "339688063", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688063"},
  {"id": "339688060", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688060"},
  {"id": "339688107", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688107"},
  {"id": "339688127", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688127"},
  {"id": "339688129", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688129"},
  {"id": "339688130", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688130"},
  {"id": "339688140", "level": 1, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688140"},
  {"id": "339688150", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688150"},
  {"id": "339688152", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688152"},
  {"id": "339688156", "level": 2, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688156"},
  {"id": "339688166", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688166"},
  {"id": "339688190", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688190"},
  {"id": "339688193", "level": 3, "program": "Шагательная табата", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339688193"},

  // ── Зумбавидные тренировки ──
  {"id": "339701796", "level": 2, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701796"},
  {"id": "339701803", "level": 2, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701803"},
  {"id": "339701808", "level": 3, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701808"},
  {"id": "339701813", "level": 3, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701813"},
  {"id": "339701823", "level": 3, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701823"},
  {"id": "339701832", "level": 3, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701832"},
  {"id": "339701869", "level": 3, "program": "Зумбавидные тренировки", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701869"},

  // ── Плавный старт ──
  {"id": "342162460", "level": 1, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162460"},
  {"id": "342162461", "level": 1, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162461"},
  {"id": "342162462", "level": 1, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162462"},
  {"id": "342162463", "level": 2, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162463"},
  {"id": "342244102", "level": 2, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342244102"},
  {"id": "342162464", "level": 2, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162464"},
  {"id": "342162465", "level": 3, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162465"},
  {"id": "342162466", "level": 3, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162466"},
  {"id": "342162467", "level": 3, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162467"},
  {"id": "342162468", "level": 3, "program": "Плавный старт", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342162468"},

  // ── Мягкий фитнес ──
  {"id": "342014738", "level": 1, "program": "Мягкий фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342014738"},
  {"id": "342014739", "level": 1, "program": "Мягкий фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342014739"},
  {"id": "342014740", "level": 1, "program": "Мягкий фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342014740"},
  {"id": "342014741", "level": 1, "program": "Мягкий фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342014741"},
  {"id": "342014742", "level": 1, "program": "Мягкий фитнес", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=342014742"},

  // ── Шагай дома. Активно ──
  {"id": "339701950", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701950"},
  {"id": "339701986", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701986"},
  {"id": "339702018", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702018"},
  {"id": "339701990", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339701990"},
  {"id": "339702031", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702031"},
  {"id": "339702036", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702036"},
  {"id": "339702041", "level": 3, "program": "Шагай дома. Активно", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702041"},

  // ── Шагай дома. БАЗА ──
  {"id": "339702301", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702301"},
  {"id": "339702310", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702310"},
  {"id": "339702312", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702312"},
  {"id": "339702319", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702319"},
  {"id": "339702379", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702379"},
  {"id": "339702288", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702288"},
  {"id": "339702371", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702371"},
  {"id": "339702363", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339702363"},
  {"id": "341043842", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341043842"},
  {"id": "341045800", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341045800"},
  {"id": "341046213", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341046213"},
  {"id": "341046491", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341046491"},
  {"id": "341046529", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341046529"},
  {"id": "341046676", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/teach/control/lesson/view/id/341046676"},
  {"id": "345336679", "level": 1, "program": "Шагай дома. БАЗА", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=345336679"},

  // ── Тренировки для 100 кг+ ──
  {"id": "339707481", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707481"},
  {"id": "339707488", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707488"},
  {"id": "339707491", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707491"},
  {"id": "339707501", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707501"},
  {"id": "339707502", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707502"},
  {"id": "339707503", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707503"},
  {"id": "339707509", "level": 1, "program": "Тренировки для 100 кг+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339707509"},

  // ── Тренировки для 50+ ──
  {"id": "339726530", "level": 3, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726530"},
  {"id": "339726532", "level": 2, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726532"},
  {"id": "339726536", "level": 1, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726536"},
  {"id": "339726639", "level": 2, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726639"},
  {"id": "339726641", "level": 2, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726641"},
  {"id": "339726644", "level": 1, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726644"},
  {"id": "339726646", "level": 2, "program": "Тренировки для 50+", "url": "https://my.walk-walk.ru/pl/teach/control/lesson/view?id=339726646"},
];
