import React from "react";
import TradeItemPart from "./TradeItemPart";

const TradeItem = ({
  trade: {
    id = "",
    statusName = "",
    name = "",
    description = "",
    dateApplication = "",
    dateOfThe = "",
    dateApproval = "",
  },
}) => {
  return (
    <div className="Trade-item">
      <TradeItemPart className="trade-status trade" text={statusName} />
      <TradeItemPart className="trade-id trade" text={id} />
      <a href="http://diakonissa.blogspot.com" className="trade-name trade">
        {name}
      </a>
      <TradeItemPart className="trade-description trade" text={description} />
      <TradeItemPart
        className="trade-date-application trade"
        text={dateApplication}
      />
      <TradeItemPart className="trade-date-of-the trade" text={dateOfThe} />
      <TradeItemPart
        className="trade-date-approval trade"
        text={dateApproval}
      />
    </div>
  );
};

export default TradeItem;
