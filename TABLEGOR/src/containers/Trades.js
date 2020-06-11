import React from "react";
import { connect } from "react-redux";
import FilterList from "../components/FilterList";
import TradeList from "../components/TradeList";
import Search from "../components/Search";
import { changeStatus } from "../store/actions";
import { search } from "../store/actions";
import PropTypes from "prop-types";


let filters = [
  { title: "Одобренные", id: 1 },
  { title: "Ждут одобрения", id: 2 },
  { title: "Не выигранные", id: 3 },
  { title: "Выигранные/Подписанные", id: 4 },
  { title: "Отклоненные", id: 5 },
  { title: "Архив", id: 6 },
  { title: "Все", id: 7 },
];

const Trades = ({ traders = [{}], changeStatus, search, clear }) => {
  return (
    <div className="Trades container">
      <div className="filter-panel">
        <FilterList filters={filters} changeStatus={changeStatus} />
        <div className="filter-low-panel">
          <Search search={search} clear={clear} />
        </div>
      </div>
      <TradeList traders={traders} />
    </div>
  );
};

Trades.propTypes = {
  changeStatus: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  traders: state.applications,
});

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (e) => {
    const status = e.target;
    document.getElementsByClassName("active")[0].classList.remove("active");
    status.classList.add("active");
    return dispatch(changeStatus(status.innerHTML));
  },

  search: () => {
    const firstDate = document.getElementById("first-date");
    const secondDate = document.getElementById("second-date");
    const searchText = document.getElementById("search-text");
    return dispatch(
      search(firstDate.value, secondDate.value, searchText.value)
    );
  },

  clear: () => {
    const inputs = document.getElementsByTagName("input");
    inputs[0].value = inputs[1].value = inputs[2].value = "";
    const active = document.getElementsByClassName("active");
    return dispatch(changeStatus(active[0].innerHTML));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trades);
