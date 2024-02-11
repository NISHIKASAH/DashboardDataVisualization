import React from "react";
import SliderComponent from "./Common/SliderComponent";
//will give value to all individual slider element
const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data, //to store the old copy of other elem (loanAmount, interesetRate and all)
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value, // to set the new value dynamically
          })
        }
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.downPayment}
        label="Down Payment"
        value={data.downPayment}
      />
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        unit="$"
        amount={data.loanAmount}
        label="Loan Amount"
        value={data.loanAmount}
      />
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;
