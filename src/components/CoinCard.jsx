const CoinCard = ({ coinPrice, btcPrice }) => {
  return (
    <li className="text-2xl flex items-center justify-center">
      <img
        className="w-10 inline-block "
        src={`./images/${coinPrice.market.substring(4)}.toLowerCase().png`}
        alt={coinPrice.market}
      />
      <span className="ml-4 inline-block w-12 ">
        {" "}
        {coinPrice.market.substring(4)}
      </span>
      <span className="ml-10">
        ₩
        {coinPrice.market.substring(0, 3) === "BTC"
          ? (coinPrice.trade_price * btcPrice).toFixed(2).toLocaleString()
          : coinPrice.trade_price}{" "}
      </span>
    </li>
  );
};

export default CoinCard;
