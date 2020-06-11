import React from "react";
import TradeItem from "./TradeItem";
import SearchText from "./SearchText";
import {
  nameOrgTitle,
  descriptionJobTitle,
  applicationDateTitle,
  bidDateTitle,
  dateOfApprovalTitle,
} from "../languages/languages";


const TradeList = ({ traders = [{}] }) => {
  return (
    <div>
      <div className="trade-title">
        <span></span>
        <SearchText text={nameOrgTitle} className="first-title" />
        <SearchText text={descriptionJobTitle} className="second-title" />
        <SearchText text={applicationDateTitle} className="third-title" />
        <SearchText text={bidDateTitle} className="fouth-title" />
        <SearchText text={dateOfApprovalTitle} className="five-title" />
      </div>
      <div className="Trade-list">
        {traders.map((trade) => {
          return <TradeItem key={trade.id} trade={trade} />;
        })}
      </div>
    </div>
  );
};

export default TradeList;
