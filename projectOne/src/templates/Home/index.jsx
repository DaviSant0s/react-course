import { Children, cloneElement, useState } from "react";

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({children}) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn(s => !s);

  return Children.map(children, child => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn
    });

    return newChild;
  });
}

const TurnedOn = ({isOn, children}) => {
  return isOn ? children : null;
}

const TurnedOff = ({isOn, children}) => {
  return isOn ? null : children;
}

const TurnButton = ({isOn, onTurn, ...props}) => {
  return <button onClick={onTurn} {...props}>Turn {isOn ? 'OFF' : 'ON'}</button>
}

const P = ({children}) => <p {...s}>{children}</p>
 
export const Home = () => {

  return (
    <TurnOnOff>

      <TurnedOn><P>ESTÁ ON</P></TurnedOn>

      <TurnedOff><P>ESTÁ OFF</P></TurnedOff>

      <TurnButton {...s}/>

    </TurnOnOff >
  );
};