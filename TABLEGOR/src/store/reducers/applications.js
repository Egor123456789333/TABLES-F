import T from "../types";

const initialState = [
  {
    status: "Архив",
    statusName: "архив",
    id: 16398,
    name: "Ввещенский женский монастырь",
    description: "Монтаж автоматической пожарной",
    dateApplication: "24 марта 2020",
    dateApplicationInNumber: "2020-03-24",
    dateOfThe: "15 декабря 2019",
    dateApproval: "11 ноября 2018",
  },
  {
    status: "Ждут одобрения",
    statusName: "в ожидании",
    id: 5555,
    name: "Успенский монастырь",
    description: "автоматической пожарной системы",
    dateApplication: "24 апреля 2020",
    dateApplicationInNumber: "2020-04-24",
    dateOfThe: "15 марта 2019",
    dateApproval: "15 ноября 2018",
  },
  {
    status: "Ждут одобрения",
    statusName: "в ожидании",
    id: 234,
    name: "Крещенский храм",
    description: "протекает крыша",
    dateApplication: "24 марта 2015",
    dateApplicationInNumber: "2015-03-24",
    dateOfThe: "31 декабря 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Ждут одобрения",
    statusName: "в ожидании",
    id: 3441,
    name: "Благовещенская церковь",
    description: "Монтаж автоматической пожарной",
    dateApplication: "23 марта 2020",
    dateApplicationInNumber: "2020-03-23",
    dateOfThe: "16 декабря 2019",
    dateApproval: "13 ноября 2018",
  },
  {
    status: "Архив",
    statusName: "архив",
    id: 4446,
    name: "Церковь пресвятой богородицы",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Отклоненные",
    statusName: "отклонен",
    id: 4449,
    name: "Ввещенский женский монастырь",
    description: "обвалился пол",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Выигранные/Подписанные",
    statusName: "подписан",
    id: 4447,
    name: "Ещенский женский монастырь",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Не выигранные",
    statusName: "не выигран",
    id: 4448,
    name: "Крещенский женский монастырь",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Не выигранные",
    statusName: "не выигран",
    id: 4453,
    name: "Крещенский мужской монастырь",
    description: "потрескались стены",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Не выигранные",
    statusName: "не выигран",
    id: 4450,
    name: "Крещенский женский монастырь",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Не выигранные",
    statusName: "не выигран",
    id: 4451,
    name: "Крещенский мужской монастырь",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
  {
    status: "Не выигранные",
    statusName: "не выигран",
    id: 4452,
    name: "Крещенский мужской монастырь",
    description: "дефекты пожарной системы",
    dateApplication: "24 марта 2011",
    dateApplicationInNumber: "2011-03-24",
    dateOfThe: "22 июля 2019",
    dateApproval: "31 ноября 2018",
  },
];

export default function applications(state = initialState, action) {
  switch (action.type) {
    case T.CHANGE_STATUS:
      state = [...initialState];
      if (action.status === "Все") {
        return state;
      } else {
        return state.slice().filter((row) => row.status === action.status);
      }
    case T.SEARCH:
      if (action.firstDate === "" || action.secondDate === "") {
        if (action.searchText === "") {
          return (state = [...initialState]);
        } else {
          return state
            .slice()
            .filter(
              (row) =>
                row.name
                  .toLowerCase()
                  .indexOf(action.searchText.toLowerCase()) !== -1
            );
        }
      } else {
        return state
          .slice()
          .filter(
            (row) =>
            row.dateApplicationInNumber >= action.firstDate &&
            row.dateApplicationInNumber <= action.secondDate &&
            row.name
              .toLowerCase()
              .indexOf(action.searchText.toLowerCase()) !== -1
          );
      }
    default:
      return state;
  }
}
