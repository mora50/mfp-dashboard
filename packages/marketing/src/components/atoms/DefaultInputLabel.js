import React from "react";

import { Typography } from "@material-ui/core";

/**
 * Component to display input label
 *
 * @param { bool } error: if has error;
 * @param { string } label: input label;
 * }
 */

// interface Props {
//   error: boolean;
//   label: string;
// }

// const DefaultInputLabel: React.FC<Props> = ({
//   error,
//   label,
// }): JSX.Element => {

const DefaultInputLabel = ({ error, label }) => {
  const colorField = () => {
    return error ? { color: "#f44336" } : {};
  };

  return <Typography style={colorField()}>{label}</Typography>;
};

export default DefaultInputLabel;
